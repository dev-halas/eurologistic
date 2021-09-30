<?php 
    $textSmall = get_field('about--textSmall');
    $textBig = get_field('about--textBig');
    $text = get_field('about--text');
    $img = get_field('about--img');
?>

<section class="about animate" id="o_firmie">
    <div class="aboutLeft">
        <div class="fadeInLeft">
            <h2 class="aboutLeft--small"><?php echo $textSmall; ?></h2>
            <h2 class="aboutLeft--title"><?php echo $textBig; ?></h2>
            <div class="aboutLeft--text"><?php echo $text; ?></div>
        </div>
    </div> 
    <div class="aboutRight fadeInBottomLow" style="
        background: url(<?php echo esc_url($img['url']); ?>); 
        background-size: cover; 
        background-position: center left; 
        background-repeat: no-repeat;">
    </div>
</section>