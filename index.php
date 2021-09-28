<?php get_header();?>

    <section class=" slider">
        <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide" style="background: url('<?php echo THEME_URL ?>_dev/img/header.jpg'); background-position: right center; background-size: cover;">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                ...
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <!--<div class="swiper-button-prev "></div>
            <div class="swiper-button-next "></div>-->
        </div>

        <div class="slider__nav">
            <div class="slider__nav-social">
                <span>odwiedź nasze social media</span>
                <i class="fa fa-facebook" aria-hidden="true "></i>
                <i class="fa fa-instagram" aria-hidden="true "></i>
            </div>
            <div class="slider__nav-scroll">
                <span class="slider__nav-scroll-arrow">zjedź w dół</span>
            </div>
        </div>

    </section>
    <!-- Slider main container -->

<?php get_footer();?>