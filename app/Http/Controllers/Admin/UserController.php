<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\CrudController;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends CrudController
{ 

    public function __construct(User $data)
    {
        parent::__construct($data);
    }

    protected $index = 'Admin/Users/Index';
    protected $indexUrl = 'admin.users.index';
    protected $form = 'Admin/Users/Form';
    

    public function validationRules(){
        return [
            'name'=>'required',
            'email'=>'required|email',
    ];
    }

}
