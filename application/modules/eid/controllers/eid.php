<?php
if (!defined('BASEPATH'))
	exit('No direct script access allowed');

class eid extends MY_Controller {

	public function __construct(){

		parent::__construct();
		$this->login_reroute(array(2));

		$this->view_data['content_view'] 	= 	"eid/dashboard_view";
		$this->view_data['sidebar'] 		= 	"eid_sidebar";
		$this->view_data['title'] 			= 	"EID | Dashboard";
		$this->view_data['filter']			=	false;
		$this->view_data 					=	array_merge($this->view_data,$this->load_libraries(array()));		
		$this->view_data['menu_select']		= 	array(0);
		$this->view_data['breadcrumbs'] 	=	array(
														0 	=>	array(
																	"title" 	=>	"Home",
																	"link"		=>	base_url()."eid/",
																	"class"		=>	""
																	),
														1 	=>	array(
																	"title" 	=>	"Dashboard",
																	"link"		=>	base_url()."eid/dashboard",
																	"class"		=>	"active"
																	)
												);
	}

	public function index(){

		$this->dashboard();
	}

	public function dashboard(){		
		
		$this -> template($this->view_data);
	}


}