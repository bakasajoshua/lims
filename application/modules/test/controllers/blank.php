<?php (defined('BASEPATH')) OR exit('No direct script access allowed');

/* The MX_Controller class is autoloaded as required */

/*
* @package		test
* @author		Kevin MWangi 
* @email 		mwangikevinn@gmail.com
* @usage 		
*/

class blank extends MY_Controller{


	public function __construct(){

		$this->view_data['content_view'] 	= "test/blank_view";
		$this->view_data['sidebar'] 		= "eid_sidebar";
		$this->view_data['title'] 			= "Equipment";
		$this->view_data['filter']			=	false;

		$this->view_data	=array_merge($this->view_data,$this->load_libraries(array('dataTables','style-bootstap')));
		
	}

	public function index(){
		
		$this -> template($this->view_data);

	}

}