<?php

Route::middleware(['auth:api'])->group(function () {
    Route::apiResources([
        'roles' => 'RoleController',
    ]);
});

