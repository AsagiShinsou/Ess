<?php 
    
    class TEss {
        public static function build($ncItem, $category = "", $list = "", $position = "" ){
            return ' data-ess="good-view" data-name="'.$ncItem['Name'].'" data-article="'.$ncItem['Article'].'" data-id="'.$ncItem['Message_ID'].'" data-price="'.$ncItem['ItemPrice'].'" data-brand="'.$ncItem['Brand'].'" data-category="'.$category.'" data-variant="'.$variant.'" data-list="'.$list.'" data-position="'.$position.'"';
        }
    }
    
?>