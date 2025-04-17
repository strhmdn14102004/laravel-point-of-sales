<?php

namespace App\Services;

use Google\Client;
use Google\Service\Drive;
use Google\Service\Drive\DriveFile;

class GoogleDriveService
{
    protected $service;

    public function __construct()
    {
        $client = new Client();
        $client->setAuthConfig(storage_path('app/google-service-account.json'));
        $client->addScope(Drive::DRIVE);
        
        $this->service = new Drive($client);
    }

    public function uploadFile($file, $folderId = null)
    {
        $fileMetadata = new DriveFile([
            'name' => $file->hashName(),
            'parents' => $folderId ? [$folderId] : []
        ]);

        $content = file_get_contents($file->path());
        
        $uploadedFile = $this->service->files->create(
            $fileMetadata,
            [
                'data' => $content,
                'mimeType' => $file->getMimeType(),
                'uploadType' => 'multipart',
                'fields' => 'id,webViewLink,webContentLink'
            ]
        );

        // Set permission to public
        $permission = new \Google\Service\Drive\Permission([
            'type' => 'anyone',
            'role' => 'reader'
        ]);
        
        $this->service->permissions->create(
            $uploadedFile->id,
            $permission,
            ['fields' => 'id']
        );

        return [
            'id' => $uploadedFile->id,
            'name' => $uploadedFile->name,
            'webViewLink' => $uploadedFile->webViewLink,
            'webContentLink' => $uploadedFile->webContentLink
        ];
    }

    public function deleteFile($fileId)
    {
        try {
            $this->service->files->delete($fileId);
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }
}