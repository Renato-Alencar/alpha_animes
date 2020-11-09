<?php

function Api_get_anime()
{
    $args = array(
        'post_type'     =>  'titulo-anime',
        'fields'        =>  'ids'
    );
    
    $loop = new WP_Query($args);

    while( $loop->have_posts() ) {
        $loop->the_post();
        $loopArray[] = array(
            'ID'        =>  get_the_ID(),
            'title'     =>  get_the_title(),
            'content'   =>  get_the_excerpt(),
            'imagem'    =>  get_the_post_thumbnail_url(),
        );
    }

    return rest_ensure_response($loopArray);
}

function Registro_api_anime()
{
    register_rest_route(
        'api/v1', '/animes', array(
            'methods'       => WP_REST_Server::READABLE,
            'callback'      => 'Api_get_anime'
        )
    );
}

add_action('rest_api_init', 'Registro_api_anime');