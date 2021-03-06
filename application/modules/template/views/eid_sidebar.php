<div id="sidebar" class="sidebar   responsive">
	<script type="text/javascript">
	try{ace.settings.check('sidebar' , 'fixed')}catch(e){}
	</script>

	<div class="sidebar-shortcuts" id="sidebar-shortcuts">
		<div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
			<button class="btn btn-success">
				<i class="ace-icon fa fa-signal"></i>
			</button>

			<button class="btn btn-info">
				<i class="ace-icon fa fa-pencil"></i>
			</button>

			<button class="btn btn-warning">
				<i class="ace-icon fa fa-users"></i>
			</button>

			<button class="btn btn-danger">
				<i class="ace-icon fa fa-cogs"></i>
			</button>
		</div>

		<div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
			<span class="btn btn-success"></span>

			<span class="btn btn-info"></span>

			<span class="btn btn-warning"></span>

			<span class="btn btn-danger"></span>
		</div>
	</div><!-- /.sidebar-shortcuts -->

	<ul class="nav nav-list" style="top: 0px;">
		<li class="active">
			<a href="index-2.html">
				<i class="menu-icon fa fa-tachometer"></i>
				<span class="menu-text"> Dashboard </span>
			</a>

			<b class="arrow"></b>
		</li>

		<li class="hsub">
			<a href="<?php echo base_url()?>eid/samples">
				<i class="menu-icon fa fa-tint"></i>
				<span class="menu-text"> Samples </span>
			</a>

			<b class="arrow"></b>
		</li>

		<li class="hsub">

			<a href="#" class="dropdown-toggle">
				<i class="menu-icon fa  fa-table"></i>
				<span class="menu-text"> Worksheets </span>

				<b class="arrow fa fa-angle-down"></b>
			</a>


			<b class="arrow"></b>

			<ul class="submenu nav-hide" style="display: none;">
				<li class="hsub">
					<a href="#" class="dropdown-toggle">
						<i class="menu-icon fa fa-caret-right"></i>
						<i class="fa fa-barcode"></i>
						&nbsp;Taqman
					</a>

					<b class="arrow"></b>	

				</li>

				<li class="">
					<a href="typography.html">
						<i class="menu-icon fa fa-caret-right"></i>
						<i class="fa fa-barcode"></i>
						&nbsp;Abbott
					</a>

					<b class="arrow"></b>
				</li>

				<li class="">
					<a href="elements.html">
						<i class="menu-icon fa fa-caret-right"></i>
						<i class="fa fa-clock-o"></i>
						&nbsp;Worksheet History
					</a>

					<b class="arrow"></b>
				</li>				
			</ul>
		</li>

		<li class="hsub">

			<a href="#" class="dropdown-toggle">
				<i class="menu-icon fa  fa-share-square-o"></i>
				<span class="menu-text"> Results </span>

				<b class="arrow fa fa-angle-down"></b>
			</a>


			<b class="arrow"></b>

			<ul class="submenu nav-hide" style="display: none;">
				<li class="hsub">
					<a href="#" class="dropdown-toggle">
						<i class="menu-icon fa fa-caret-right"></i>
						<i class="fa fa-pencil-square"></i>
						&nbsp;Update Results						
					</a>

					<b class="arrow"></b>	

				</li>

				<li class="">
					<a href="typography.html">
						<i class="menu-icon fa fa-caret-right"></i>
						<i class="fa fa-truck"></i>
						&nbsp;Dispatch Results
					</a>

					<b class="arrow"></b>
				</li>

				<li class="">
					<a href="elements.html">
						<i class="menu-icon fa fa-caret-right"></i>
						<i class="fa fa-eye"></i>
						&nbsp;View Results
					</a>

					<b class="arrow"></b>
				</li>				
			</ul>
		</li>

		<li class="hsub">
			<a href="#" class="dropdown-toggle">
				<i class="menu-icon fa fa-tasks"></i>
				<span class="menu-text"> Tasks </span>

				<b class="arrow fa fa-angle-down"></b>
			</a>

			<b class="arrow"></b>

			<ul class="submenu">
				<li class="">
					<a href="tables.html">
						<i class="menu-icon fa fa-caret-right"></i>
						<i class="fa fa-square"></i>
						&nbsp;Completed
					</a>

					<b class="arrow"></b>
				</li>

				<li class="">
					<a href="jqgrid.html">
						<i class="menu-icon fa fa-caret-right"></i>
						<i class="fa fa-spinner fa-spin"></i>
						&nbsp;Pending
					</a>

					<b class="arrow"></b>
				</li>
			</ul>
		</li>

		<li class="hsub">
			<a href="#" class="dropdown-toggle">
				<i class="menu-icon fa fa-flask"></i>
				<span class="menu-text"> Lab Consumption </span>

				<b class="arrow fa fa-angle-down"></b>
			</a>

			<b class="arrow"></b>

			<ul class="submenu">
				<li class="">
					<a href="form-elements.html">
						<i class="menu-icon fa fa-caret-right"></i>
						<i class="fa fa-calendar"></i>
						&nbsp;Monthly Reporting
					</a>

					<b class="arrow"></b>
				</li>

				<li class="">
					<a href="form-wizard.html">
						<i class="menu-icon fa fa-caret-right"></i>
						<i class="fa fa-clock-o"></i>
						&nbsp;Historical Reports
					</a>

					<b class="arrow"></b>
				</li>

				<li class="">
					<a href="wysiwyg.html">
						<i class="menu-icon fa fa-caret-right"></i>
						<i class="fa fa-check-circle-o"></i>
						&nbsp;Received Consumables/Reagents
					</a>

					<b class="arrow"></b>
				</li>

			</ul>
		</li>

		<li class="hsub">
			<a href="#" class="dropdown-toggle">
				<i class="menu-icon fa fa-share-square"></i>
				<span class="menu-text"> Facility Requisition </span>

				<b class="arrow fa fa-angle-down"></b>
			</a>

			<b class="arrow"></b>

			<ul class="submenu">
				<li class="">
					<a href="form-elements.html">
						<i class="menu-icon fa fa-caret-right"></i>
						<i class="fa fa-list"></i>
						&nbsp;Fill Form
					</a>

					<b class="arrow"></b>
				</li>

				<li class="">
					<a href="form-wizard.html">
						<i class="menu-icon fa fa-caret-right"></i>
						<i class="fa fa-clock-o"></i>
						&nbsp;Requisition History
					</a>

					<b class="arrow"></b>
				</li>

			</ul>
		</li>


		<li class="hsub">
			<a href="#" class="dropdown-toggle">
				<i class="menu-icon fa fa-plus-square-o"></i>
				<span class="menu-text"> Others </span>

				<b class="arrow fa fa-angle-down"></b>
			</a>

			<b class="arrow"></b>

			<ul class="submenu">
				<li class="">
					<a href="form-elements.html">
						<i class="menu-icon fa fa-caret-right"></i>
						<i class="fa fa-download"></i>
						&nbsp;Download EID Form
					</a>

					<b class="arrow"></b>
				</li>

				<li class="">
					<a href="form-elements.html">
						<i class="menu-icon fa fa-caret-right"></i>
						<i class="fa fa-exchange"></i>
						&nbsp;Synchronize NACP
					</a>

					<b class="arrow"></b>
				</li>

				<li class="">
					<a href="form-wizard.html">
						<i class="menu-icon fa fa-caret-right"></i>
						<i class="fa fa-link"></i>
						&nbsp;User Manual
					</a>

					<b class="arrow"></b>
				</li>

			</ul>
		</li>

	</ul><!-- /.nav-list -->

	<div class="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
		<i class="ace-icon fa fa-angle-double-left" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
	</div>

	<script type="text/javascript">
	try{ace.settings.check('sidebar' , 'collapsed')}catch(e){}
	</script>
</div>