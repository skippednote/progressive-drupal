<?php

namespace Drupal\session_list\Controller;

use Drupal\Core\Controller\ControllerBase;
use GuzzleHttp\Client;

/**
 * Class SessionList.
 *
 * @package Drupal\session_list\Controller
 */
class SessionList extends ControllerBase {

  /**
   * Index.
   *
   * @return array
   *   A build array in the format expected by drupal_render().
   */
  public function index() {
    $client = new Client();
    $res = $client->request('GET', 'http://app.dd/api/sessions');
    if($res->getStatusCode() === 200) {
      $sessions = $res->getBody();
    }

    return [
      '#theme' => 'session_list',
      '#attached' => [
        'drupalSettings' => [
          'sessions' => json_decode($sessions),
        ],
        'library' => [
          'session_list/sessions'
        ],
      ],
    ];
  }

}
