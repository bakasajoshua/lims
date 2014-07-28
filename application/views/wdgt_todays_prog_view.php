<div class="widget-box">
    <div class="widget-header widget-header-flat widget-header-small">
        <h5 class="widget-title">
            <i class="ace-icon fa fa-signal"></i>
            Todays Progress
        </h5>
    </div>

    <div class="widget-body my-widget-md">
        <div class="widget-main">

            <div id ="dat" class ="" style="height:240px;">

            </div>
            <div class="hr hr8 hr-double"></div>

        </div><!-- /.widget-main -->
    </div><!-- /.widget-body -->
</div>

<script>

$(function () {
    $('#dat').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Samples', 'Tests', 'Repeats', 'failed', 'Successful']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },            
        credits:{
            enabled:false
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'viral load',
            color:"#d43f3a",
            data: [2, 2, 3, 2, 1]
        },{
            name: 'eid',
            color:"#6fb3e0",
            data: [5, 3, 4, 7, 2]
        }]
    });
});

</script>
