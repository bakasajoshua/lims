<script type="text/javascript">
function write_mail(){

	

	$("#writemail").modal("show");

	}

function show_email(id, subject, message, recipients, sent_date) 
	{
		var str = "#tr_"+id;

	var row = $(str).html();

	$("#edit_table_row").html(row);

	$("#showID").val(id);
	$("#showsubject").val(subject);
	$("#showmessage").val(message);
	$("#showrecipients").val(recipients);
	$("#showdate").val(sent_date);
			
	$("#readingDiv").modal("show");
	}

function hide_edit(){
		$("#writemail").modal("hide");
		$("#readingDiv").modal("hide");
		
	}

	$( document ).ready(function() {

    var test_reason;

    $.getJSON("<?php echo base_url('assets/json/emails.json');?>", function(data) {
        test_reason = data;
        $(".emailto").select2({ data: emailto ,multiple: true});
    });


});

</script>