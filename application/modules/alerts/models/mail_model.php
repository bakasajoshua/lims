<?php
if (!defined('BASEPATH'))
	exit('No direct script access allowed');

/**
* 
*/
class mail_model extends MY_Model
{
	
	function __construct()
	{
		
	}

	public function send_mail($id, $recepient, $subject, $message, $tim)
	{
		$emails = array(
			'id' 		   =>   NULL,
			'subject'      =>   $subject,
			'message'      =>   $message,
			'recipients'   =>   $recepient,
			'sender_id'    =>   $id,
			'sent_date'    =>   $tim,
			'send_status'  =>   1
			);

		$insert = $this->db->insert('mailerlog', $emails);
		
	}

	public function sent_mail()
	{
		$id = $this->session->userdata("id");
		$sql = "SELECT 
								`id`,
								`subject`,
								`message`,
								`recipients`,
								`sender_id`,
								`sent_date`,
								`send_status`
							FROM `mailerlog` 
								
							WHERE `sender_id` = '$id'
								AND `send_status` = 1";
							
		return $sent = R::getAll($sql);
	}

	public function get_emails()
	{
		$sql = "SELECT
						`id`,
						`name`,
						`email`
					FROM user";

		$emails = R::getAll($sql);
		//print_r($emails); die();

		$response['name']  = $emails[0]['name']; 
		$response['mail']= $emails[0]['email'];
		$data = $response;

		$json_string = json_encode($data);
		$file = 'assets/json/emails.json';
		file_put_contents($file, $json_string);
	}
}

?>