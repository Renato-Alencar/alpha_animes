<?php
/** 
 *  APi para uso do frontend
 *  */

function Cadastro_anime() 
{
    $nomeSingular   = "Anime";
    $nomePlural     = "Animes";
    $descricao      = "Parte para cadastro de animes";

    $labels = array (
        'name'          =>  $nomePlural,
        'name_singular' =>  $nomeSingular,
        'add_new'       =>  'Novo ' . $nomeSingular,
        'add_new_item'  =>  'Adicionar novo ' . $nomeSingular,
        'edit_item'     =>  'Editar ' . $nomeSingular,
    );

    $supports = array(
        'title',
        'thumbnail',
        'excerpt'
    );

    $args = array(
        'labels'    => $labels,
        'public'    => true,
        'descript'  => $descricao,
        'menu_icon' => 'dashicons-format-video',
        'supports'  => $supports,
    );

    register_post_type('titulo-anime', $args );
}

add_action('init', 'Cadastro_anime');