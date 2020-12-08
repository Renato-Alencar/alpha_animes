<?php

function Api_get_anime( $request )
{
    $posts_data = array();
    $posts = get_posts( 
        array(
            'post__not_in'      => get_option('sticky_posts'),
            'posts_per_page'    => -1,
            'post_type'         => 'titulo-anime'
        )
    );

    foreach($posts as $post) {
        $id = $post->ID;
        $post_thumbnail = (has_post_thumbnail($id))
        ? get_the_post_thumbnail_url($id) : null;

        $posts_data[] = (object) array(
            'id'        =>  $id,
            'title'     =>  $post->post_title,
            'content'     =>  $post->post_excerpt,
            'imagem'    =>  $post_thumbnail,
        );
    }

    return rest_ensure_response($posts_data);
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