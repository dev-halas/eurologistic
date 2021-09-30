<section class="slider">
    <?php 
        if (have_rows('heroSlider')):
        $slider_count = 1; 
    ?>
        <div class="hero-slider">
            <?php 
                while (have_rows('heroSlider')): the_row();	
                $sliderImg = get_sub_field('heroSlider--img');
                $sliderTitle = get_sub_field('heroSlider--title');
                $sliderText = get_sub_field('heroSlider--text');
            ?>
                <div class="hero-slide  <?php if ($slider_count==1) echo 'active'; ?>" style="
                    background: url(<?php echo esc_url ($sliderImg['url']); ?>);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;">
                    <div class="slideInner animate">
                        <h2 class="fadeInLeft d-800"><?php echo $sliderTitle; ?></h2>
                        <h3 class="fadeInLeft d-1200"><?php echo $sliderText; ?></h3>
                    </div>  
                </div>
            <?php $slider_count++; endwhile; ?>
        </div>
    <?php endif; ?>
    <div class="sliderBar">
        
        <div class="sliderBar--inner">
        <?php 
            if (have_rows('heroSlider')):
            $slider_count = 1; 
        ?>
            <div class="sliderCounter">
                <?php while (have_rows('heroSlider')): the_row();?>
                    <span class="sliderCounter--number <?php if ($slider_count==1) echo '--active'; ?>">0<?php echo $slider_count; ?></span>
                <?php $slider_count++; endwhile; ?>
            </div>
        <?php endif; ?>
            <a href="#about" class="sliderScroll">Zobacz dalej</a>
        </div>
        
        
    </div>
</section>