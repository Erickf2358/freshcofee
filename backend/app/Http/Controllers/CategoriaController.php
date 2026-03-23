<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;
use App\Http\Resources\CategoriaResource;

class CategoriaController extends Controller
{
    public function index()
    {
        $categorias = Categoria::all();
        return CategoriaResource::collection($categorias);
    }
}