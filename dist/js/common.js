(function($) {

	var mapBlock = function() {

// Создаём пустые масивы в которых будет храниться дальшейшая информация о маркерах

    var gmarkers1 = [];
    var markers1 = [];
    var infowindow = new google.maps.InfoWindow({
        content: ''
    });


// Два масива для русской и украинской версии сайта. B функции addMarker() рассшифровка что означает каждый элемент масива


    markers1 = [
                	['0', '', 50.433613, 30.513188, 'жк', 'img/chicago-icon.png', 'Детальніше про CHICAGO CENTRAL HOUSE'],
                	['1', '', 50.434959, 30.508573, 'жк', 'img/resident-icon.png', 'Детальніше про Resident'],
                	['2', '', 50.426528, 30.514185, 'жк', 'img/new-york-icon.png', 'Детальніше про New York'],
                	['3', '', 50.407029, 30.507624, 'жк', 'img/bristol-icon.png', 'Детальніше про Bristol'],
                	['4', '', 50.425705, 30.518965, 'жк', 'img/washington-icon.png', 'Детальніше про Washington'],
                	['5', '', 50.450366, 30.489093, 'жк', 'img/einstein-icon.png', 'Детальніше про Einstein'],
                	['6', '', 50.437070, 30.541305, 'жк', 'img/philadelphia-icon.png', 'Детальніше про Philadelphia'],
                	['7', '', 50.458392, 30.428209, 'жк', 'img/happy-house-icon.png', 'Детальніше про Happy House'],
                    ['8', '', 50.458894, 30.409671, 'жк', 'img/sanfrancisco-icon.png', 'Детальніше про San Francisco'],
                	['9', '', 50.458894, 30.409671, 'жк', 'img/happy-house-icon.png', '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 844 230" style="enable-background:new 0 0 844 230;" xml:space="preserve" width=140><style type="text/css">.st0{fill:#fff;}.st1{fill:#fff;}</style><polygon class="st0" points="195.9,102 205.3,102 205.3,124.2 230.8,124.2 230.8,102 240.2,102 240.2,155.4 230.8,155.4 230.8,132.9 205.3,132.9 205.3,155.4 195.9,155.4 "/><g><g><path class="st0" d="M305.2,128.9v-0.2c0-10.4-7.6-18.9-18.2-18.9s-18,8.4-18,18.8v0.2c0,10.4,7.6,18.9,18.2,18.9C297.8,147.6,305.2,139.2,305.2,128.9 M259.2,128.9v-0.2c0-15,11.6-27.6,28-27.6s27.9,12.4,27.9,27.5v0.2c0,15-11.6,27.6-28,27.6C270.6,156.3,259.2,143.9,259.2,128.9"/></g></g><polygon class="st0" points="334.1,102 344.1,102 360.3,127.3 376.6,102 386.6,102 386.6,155.4 377.2,155.4 377.2,117.1 360.3,142.3 360,142.3 343.3,117.3 343.3,155.4 334.1,155.4 "/><polygon class="st0" points="408,102 447.6,102 447.6,110.4 417.4,110.4 417.4,124.3 444.1,124.3 444.1,132.8 417.4,132.8 417.4,147 448,147 448,155.4 408,155.4 "/><g><g><path class="st0" d="M514.9,123.4L514.9,123.4c0-2.9-2-4.8-4.7-4.8c-3,0-5,2.2-5,5v0.1c0,2.1,0.8,3.7,3.2,6.2C512.6,128.4,514.9,126.4,514.9,123.4 M515.1,146.2l-9.4-9.5c-3.9,1.7-5.6,4.3-5.6,7v0.1c0,3.5,2.9,6.1,7,6.1C510.1,149.9,512.7,148.5,515.1,146.2 M519.3,150.6c-3.6,3.4-7.8,5.5-12.8,5.5c-7.9,0-13.8-4.7-13.8-12V144c0-5.4,3.2-9.3,9-11.7c-2.4-3.1-3.5-5.7-3.5-8.8v-0.1c0-5.7,4.6-10.6,12.1-10.6c6.7,0,11.2,4.5,11.2,10.1v0.1c0,5.5-3.7,8.8-9.2,10.9l7.2,7.3c1.6-2.4,3.1-5.2,4.5-8.1l5.6,2.9c-1.7,3.4-3.5,6.7-5.7,9.5l6.7,6.7l-5.5,4L519.3,150.6z"/></g><g><path class="st0" d="M595.8,129.8c7.1,0,11.5-4,11.5-9.5v-0.2c0-6.3-4.5-9.5-11.5-9.5h-10.9v19.2H595.8z M575.5,102h21.1c12.5,0,20.3,7.1,20.3,17.9v0.2c0,12-9.6,18.2-21.4,18.2h-10.6v17.2h-9.4L575.5,102L575.5,102z"/></g></g><path class="st0" d="M661.2,134.2l-9.2-21.4l-9.2,21.4H661.2z M647.8,101.6h8.7l23.5,53.8h-10l-5.4-12.9h-25.3l-5.5,12.9h-9.6L647.8,101.6z"/><g><g><path class="st0" d="M719.9,128.5c6.7,0,11-3.5,11-8.9v-0.2c0-5.7-4.1-8.9-11.1-8.9h-13.7v17.9h13.8V128.5z M696.8,102h23.8c6.7,0,12,2,15.4,5.3c2.8,2.9,4.4,6.9,4.4,11.5v0.2c0,8.8-5.3,14-12.7,16.2l14.4,20.2H731l-13.1-18.6h-11.8v18.6h-9.4L696.8,102L696.8,102z"/></g></g><polygon class="st0" points="759.6,102 769,102 769,128.9 794.3,102 806,102 783.7,125 807,155.4 795.6,155.4 777.3,131.4 769,139.9 769,155.4 759.6,155.4 "/><g><g><path class="st0" d="M229.7,191.3L229.7,191.3c0-5.2,4.4-9.3,10.3-9.3c4,0,6.6,1.5,8.3,3.7l-4.1,2.9c-1.1-1.2-2.4-2.1-4.3-2.1c-2.7,0-4.7,2.1-4.7,4.7v0.1c0,2.7,1.9,4.7,4.7,4.7c2,0,3.2-0.9,4.4-2.2l4.1,2.6c-1.8,2.3-4.3,4-8.6,4C234.2,200.5,229.7,196.6,229.7,191.3"/></g><g><path class="st0" d="M287.4,191.3L287.4,191.3c0-2.6-2-4.8-5-4.8s-5,2.2-5,4.7v0.1c0,2.6,2,4.8,5,4.8C285.4,196,287.4,193.8,287.4,191.3 M271.9,191.3L271.9,191.3c0-5.2,4.5-9.3,10.5-9.3s10.5,4.1,10.5,9.2v0.1c0,5.1-4.5,9.2-10.5,9.2C276.3,200.5,271.9,196.4,271.9,191.3"/></g></g><polygon class="st0" points="318.1,182.4 323.8,182.4 328.4,189.2 333.1,182.4 338.8,182.4 338.8,200.1 333.4,200.1 333.4,189.9 328.4,196.9 328.3,196.9 323.4,189.9 323.4,200.1 318.1,200.1 "/><polygon class="st0" points="364.6,182.4 380.2,182.4 380.2,186.7 370,186.7 370,189.7 379.3,189.7 379.3,193.8 370,193.8 370,200.1 364.6,200.1 "/><g><g><path class="st0" d="M419.9,191.3L419.9,191.3c0-2.6-2-4.8-5-4.8s-5,2.2-5,4.7v0.1c0,2.6,2,4.8,5,4.8C417.9,196,419.9,193.8,419.9,191.3 M404.4,191.3L404.4,191.3c0-5.2,4.5-9.3,10.5-9.3s10.5,4.1,10.5,9.2v0.1c0,5.1-4.5,9.2-10.5,9.2S404.4,196.4,404.4,191.3"/></g><g><path class="st0" d="M459.6,190.9c1.8,0,2.9-0.8,2.9-2.1v-0.1c0-1.4-1.1-2.1-2.9-2.1H456v4.3L459.6,190.9L459.6,190.9z M450.6,182.4h9.2c3,0,5,0.7,6.4,1.9c1.1,1,1.7,2.4,1.7,4.1v0.1c0,2.7-1.6,4.5-4,5.5l4.7,6.2h-6.2l-3.9-5.4H456v5.4h-5.4V182.4z"/></g></g><polygon class="st0" points="497.8,186.7 491.9,186.7 491.9,182.4 509,182.4 509,186.7 503.2,186.7 503.2,200.1 497.8,200.1 "/><polygon class="st0" points="563.8,182.4 569.2,182.4 569.2,189 576.2,189 576.2,182.4 581.6,182.4 581.6,200.1 576.2,200.1 576.2,193.4 569.2,193.4 569.2,200.1 563.8,200.1 "/><g><g><path class="st0" d="M622.2,191.3L622.2,191.3c0-2.6-2-4.8-5-4.8s-5,2.2-5,4.7v0.1c0,2.6,2,4.8,5,4.8C620.3,196,622.2,193.8,622.2,191.3 M606.7,191.3L606.7,191.3c0-5.2,4.5-9.3,10.5-9.3s10.5,4.1,10.5,9.2v0.1c0,5.1-4.5,9.2-10.5,9.2S606.7,196.4,606.7,191.3"/></g><g><path class="st0" d="M652.7,192.3v-10h5.5v9.9c0,2.6,1.4,3.8,3.6,3.8c2.2,0,3.6-1.2,3.6-3.7v-10h5.5v9.8c0,5.7-3.6,8.3-9.2,8.3C656.2,200.4,652.7,197.9,652.7,192.3"/></g><g><path class="st0" d="M694.9,197.5l3-3.3c2,1.4,4.1,2.1,6.3,2.1c1.5,0,2.3-0.5,2.3-1.2V195c0-0.8-0.6-1.1-3.3-1.7c-4.2-0.9-7.4-1.9-7.4-5.6l0,0c0-3.3,2.9-5.7,7.6-5.7c3.3,0,5.9,0.8,8,2.4l-2.7,3.5c-1.8-1.2-3.7-1.8-5.5-1.8c-1.3,0-2,0.5-2,1.1l0,0c0,0.8,0.7,1.2,3.4,1.7c4.5,0.9,7.3,2.2,7.3,5.5l0,0c0,3.6-3.2,5.8-7.9,5.8C700.6,200.4,697.4,199.4,694.9,197.5"/></g></g><polygon class="st0" points="736.9,182.4 752.6,182.4 752.6,186.5 742.3,186.5 742.3,189.2 751.7,189.2 751.7,193.1 742.3,193.1 742.3,195.9 752.8,195.9 752.8,200.1 736.9,200.1 "/><g><g><path class="st1" d="M134.4,75.3L134.4,75.3L134.4,75.3z M134.1,65.5c-2.2,1.2-4.7,2.9-6.5,5.4c-1.7,2.4-2.5,5.1-2.9,7.4c2.2-1.2,4.7-2.9,6.5-5.4l0,0C132.9,70.6,133.7,67.9,134.1,65.5 M120.5,88.3c-0.8,0-1.6-0.2-2.3-0.7c-0.9-0.7-1.5-1.7-1.7-2.8c0-0.4-1.1-10.5,4.7-18.5c5.7-7.9,15.9-10.4,16.3-10.5c1.1-0.3,2.3,0,3.2,0.6c0.9,0.7,1.5,1.7,1.7,2.8c0,0.4,1.1,10.5-4.7,18.5l0,0c-5.7,7.9-15.9,10.4-16.3,10.5C121.1,88.3,120.8,88.3,120.5,88.3"/></g><g><path class="st1" d="M125.5,46L125.5,46L125.5,46z M121.9,34.3c-2.2,2.1-4.6,5.1-5.8,8.9c-1.1,3.7-0.8,7.6-0.2,10.6c2.2-2.1,4.6-5.2,5.8-8.9C122.9,41.1,122.5,37.2,121.9,34.3 M113.9,64.5c-0.4,0-0.8-0.1-1.2-0.2c-1.1-0.3-2-1.1-2.5-2.1c-0.2-0.4-5-10.9-1.8-21.3s13-16.5,13.4-16.7c1-0.6,2.1-0.7,3.2-0.4s2,1.1,2.5,2.1c0.2,0.4,5,10.9,1.8,21.3s-13,16.5-13.4,16.7C115.4,64.3,114.6,64.5,113.9,64.5"/></g><g><path class="st1" d="M74.5,57.6c2.1,3.7,5.7,8.6,11,11.8c5.4,3.3,11.6,4.3,16,4.6c-2.1-3.7-5.7-8.6-11-11.8C85.1,58.9,78.9,57.8,74.5,57.6 M104.2,82.1c-5.2,0-14.6-0.8-22.9-5.9c-12-7.4-16.7-20.7-16.9-21.3c-0.4-1.1-0.3-2.4,0.4-3.4c0.6-1,1.7-1.7,2.9-1.8c0.6-0.1,15-1.6,27,5.7c12,7.4,16.7,20.7,16.9,21.3c0.4,1.1,0.3,2.4-0.4,3.4c-0.6,1-1.7,1.7-2.9,1.8C108.1,81.9,106.6,82.1,104.2,82.1"/></g></g><path class="st1" d="M104.7,162.4h6.6v27.2h-6.6V162.4z M74.6,130.5l33.4-17.3l33.4,17.2v59.8h-22.1v-35.7H96.8v35.7H74.6V130.5zM151.5,190.2v-66L108,101.8l-43.5,22.5v65.9H46.2v10.1h123.7v-10.1L151.5,190.2L151.5,190.2z"/></svg>', 'img/svg/location/location-icon-map.svg']
               ];
     // markers2 = [
     //            	['0', '', 50.461922, 30.418754, 'pharmacy', 'img/svg/location/loc-ico/pharm-cross.svg', 'Парк Нивки'],
     //            	['1', '', 50.458609, 30.419816, 'hospital', 'img/svg/location/loc-ico/pharm-cross.svg', 'Берестейская'],
     //            	['2', '', 50.459435, 30.431500, 'gym', 'img/svg/location/loc-ico/pharm-cross.svg', 'Специализированная школа №82'],
     //            	['3', '', 50.465274, 30.438023, 'graduation', 'img/svg/location/loc-ico/pharm-cross.svg', 'Веревочный парк'],
     //            	['4', '', 50.467398, 30.434836, 'school', 'img/svg/location/loc-ico/pharm-cross.svg', 'Киевская детская железная дорога'],
     //            	['5', '', 50.467692, 30.438924, 'garden', 'img/svg/location/loc-ico/pharm-cross.svg', 'Сырецький парк'],
     //            	['6', '', 50.456413, 30.440894, 'mall', 'img/svg/location/loc-ico/pharm-cross.svg', 'КНЭУ'],
     //            	['7', '', 50.454856, 30.445475, 'supermarket', 'img/svg/location/loc-ico/pharm-cross.svg', 'Шулявская'],
     //            	['8', '', 50.348985, 30.959526, 'main', 'img/svg/location/location-icon-map.svg', '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 844 230" style="enable-background:new 0 0 844 230;" xml:space="preserve" width=140><style type="text/css">.st0{fill:#fff;}.st1{fill:#fff;}</style><polygon class="st0" points="195.9,102 205.3,102 205.3,124.2 230.8,124.2 230.8,102 240.2,102 240.2,155.4 230.8,155.4 230.8,132.9 205.3,132.9 205.3,155.4 195.9,155.4 "/><g><g><path class="st0" d="M305.2,128.9v-0.2c0-10.4-7.6-18.9-18.2-18.9s-18,8.4-18,18.8v0.2c0,10.4,7.6,18.9,18.2,18.9C297.8,147.6,305.2,139.2,305.2,128.9 M259.2,128.9v-0.2c0-15,11.6-27.6,28-27.6s27.9,12.4,27.9,27.5v0.2c0,15-11.6,27.6-28,27.6C270.6,156.3,259.2,143.9,259.2,128.9"/></g></g><polygon class="st0" points="334.1,102 344.1,102 360.3,127.3 376.6,102 386.6,102 386.6,155.4 377.2,155.4 377.2,117.1 360.3,142.3 360,142.3 343.3,117.3 343.3,155.4 334.1,155.4 "/><polygon class="st0" points="408,102 447.6,102 447.6,110.4 417.4,110.4 417.4,124.3 444.1,124.3 444.1,132.8 417.4,132.8 417.4,147 448,147 448,155.4 408,155.4 "/><g><g><path class="st0" d="M514.9,123.4L514.9,123.4c0-2.9-2-4.8-4.7-4.8c-3,0-5,2.2-5,5v0.1c0,2.1,0.8,3.7,3.2,6.2C512.6,128.4,514.9,126.4,514.9,123.4 M515.1,146.2l-9.4-9.5c-3.9,1.7-5.6,4.3-5.6,7v0.1c0,3.5,2.9,6.1,7,6.1C510.1,149.9,512.7,148.5,515.1,146.2 M519.3,150.6c-3.6,3.4-7.8,5.5-12.8,5.5c-7.9,0-13.8-4.7-13.8-12V144c0-5.4,3.2-9.3,9-11.7c-2.4-3.1-3.5-5.7-3.5-8.8v-0.1c0-5.7,4.6-10.6,12.1-10.6c6.7,0,11.2,4.5,11.2,10.1v0.1c0,5.5-3.7,8.8-9.2,10.9l7.2,7.3c1.6-2.4,3.1-5.2,4.5-8.1l5.6,2.9c-1.7,3.4-3.5,6.7-5.7,9.5l6.7,6.7l-5.5,4L519.3,150.6z"/></g><g><path class="st0" d="M595.8,129.8c7.1,0,11.5-4,11.5-9.5v-0.2c0-6.3-4.5-9.5-11.5-9.5h-10.9v19.2H595.8z M575.5,102h21.1c12.5,0,20.3,7.1,20.3,17.9v0.2c0,12-9.6,18.2-21.4,18.2h-10.6v17.2h-9.4L575.5,102L575.5,102z"/></g></g><path class="st0" d="M661.2,134.2l-9.2-21.4l-9.2,21.4H661.2z M647.8,101.6h8.7l23.5,53.8h-10l-5.4-12.9h-25.3l-5.5,12.9h-9.6L647.8,101.6z"/><g><g><path class="st0" d="M719.9,128.5c6.7,0,11-3.5,11-8.9v-0.2c0-5.7-4.1-8.9-11.1-8.9h-13.7v17.9h13.8V128.5z M696.8,102h23.8c6.7,0,12,2,15.4,5.3c2.8,2.9,4.4,6.9,4.4,11.5v0.2c0,8.8-5.3,14-12.7,16.2l14.4,20.2H731l-13.1-18.6h-11.8v18.6h-9.4L696.8,102L696.8,102z"/></g></g><polygon class="st0" points="759.6,102 769,102 769,128.9 794.3,102 806,102 783.7,125 807,155.4 795.6,155.4 777.3,131.4 769,139.9 769,155.4 759.6,155.4 "/><g><g><path class="st0" d="M229.7,191.3L229.7,191.3c0-5.2,4.4-9.3,10.3-9.3c4,0,6.6,1.5,8.3,3.7l-4.1,2.9c-1.1-1.2-2.4-2.1-4.3-2.1c-2.7,0-4.7,2.1-4.7,4.7v0.1c0,2.7,1.9,4.7,4.7,4.7c2,0,3.2-0.9,4.4-2.2l4.1,2.6c-1.8,2.3-4.3,4-8.6,4C234.2,200.5,229.7,196.6,229.7,191.3"/></g><g><path class="st0" d="M287.4,191.3L287.4,191.3c0-2.6-2-4.8-5-4.8s-5,2.2-5,4.7v0.1c0,2.6,2,4.8,5,4.8C285.4,196,287.4,193.8,287.4,191.3 M271.9,191.3L271.9,191.3c0-5.2,4.5-9.3,10.5-9.3s10.5,4.1,10.5,9.2v0.1c0,5.1-4.5,9.2-10.5,9.2C276.3,200.5,271.9,196.4,271.9,191.3"/></g></g><polygon class="st0" points="318.1,182.4 323.8,182.4 328.4,189.2 333.1,182.4 338.8,182.4 338.8,200.1 333.4,200.1 333.4,189.9 328.4,196.9 328.3,196.9 323.4,189.9 323.4,200.1 318.1,200.1 "/><polygon class="st0" points="364.6,182.4 380.2,182.4 380.2,186.7 370,186.7 370,189.7 379.3,189.7 379.3,193.8 370,193.8 370,200.1 364.6,200.1 "/><g><g><path class="st0" d="M419.9,191.3L419.9,191.3c0-2.6-2-4.8-5-4.8s-5,2.2-5,4.7v0.1c0,2.6,2,4.8,5,4.8C417.9,196,419.9,193.8,419.9,191.3 M404.4,191.3L404.4,191.3c0-5.2,4.5-9.3,10.5-9.3s10.5,4.1,10.5,9.2v0.1c0,5.1-4.5,9.2-10.5,9.2S404.4,196.4,404.4,191.3"/></g><g><path class="st0" d="M459.6,190.9c1.8,0,2.9-0.8,2.9-2.1v-0.1c0-1.4-1.1-2.1-2.9-2.1H456v4.3L459.6,190.9L459.6,190.9z M450.6,182.4h9.2c3,0,5,0.7,6.4,1.9c1.1,1,1.7,2.4,1.7,4.1v0.1c0,2.7-1.6,4.5-4,5.5l4.7,6.2h-6.2l-3.9-5.4H456v5.4h-5.4V182.4z"/></g></g><polygon class="st0" points="497.8,186.7 491.9,186.7 491.9,182.4 509,182.4 509,186.7 503.2,186.7 503.2,200.1 497.8,200.1 "/><polygon class="st0" points="563.8,182.4 569.2,182.4 569.2,189 576.2,189 576.2,182.4 581.6,182.4 581.6,200.1 576.2,200.1 576.2,193.4 569.2,193.4 569.2,200.1 563.8,200.1 "/><g><g><path class="st0" d="M622.2,191.3L622.2,191.3c0-2.6-2-4.8-5-4.8s-5,2.2-5,4.7v0.1c0,2.6,2,4.8,5,4.8C620.3,196,622.2,193.8,622.2,191.3 M606.7,191.3L606.7,191.3c0-5.2,4.5-9.3,10.5-9.3s10.5,4.1,10.5,9.2v0.1c0,5.1-4.5,9.2-10.5,9.2S606.7,196.4,606.7,191.3"/></g><g><path class="st0" d="M652.7,192.3v-10h5.5v9.9c0,2.6,1.4,3.8,3.6,3.8c2.2,0,3.6-1.2,3.6-3.7v-10h5.5v9.8c0,5.7-3.6,8.3-9.2,8.3C656.2,200.4,652.7,197.9,652.7,192.3"/></g><g><path class="st0" d="M694.9,197.5l3-3.3c2,1.4,4.1,2.1,6.3,2.1c1.5,0,2.3-0.5,2.3-1.2V195c0-0.8-0.6-1.1-3.3-1.7c-4.2-0.9-7.4-1.9-7.4-5.6l0,0c0-3.3,2.9-5.7,7.6-5.7c3.3,0,5.9,0.8,8,2.4l-2.7,3.5c-1.8-1.2-3.7-1.8-5.5-1.8c-1.3,0-2,0.5-2,1.1l0,0c0,0.8,0.7,1.2,3.4,1.7c4.5,0.9,7.3,2.2,7.3,5.5l0,0c0,3.6-3.2,5.8-7.9,5.8C700.6,200.4,697.4,199.4,694.9,197.5"/></g></g><polygon class="st0" points="736.9,182.4 752.6,182.4 752.6,186.5 742.3,186.5 742.3,189.2 751.7,189.2 751.7,193.1 742.3,193.1 742.3,195.9 752.8,195.9 752.8,200.1 736.9,200.1 "/><g><g><path class="st1" d="M134.4,75.3L134.4,75.3L134.4,75.3z M134.1,65.5c-2.2,1.2-4.7,2.9-6.5,5.4c-1.7,2.4-2.5,5.1-2.9,7.4c2.2-1.2,4.7-2.9,6.5-5.4l0,0C132.9,70.6,133.7,67.9,134.1,65.5 M120.5,88.3c-0.8,0-1.6-0.2-2.3-0.7c-0.9-0.7-1.5-1.7-1.7-2.8c0-0.4-1.1-10.5,4.7-18.5c5.7-7.9,15.9-10.4,16.3-10.5c1.1-0.3,2.3,0,3.2,0.6c0.9,0.7,1.5,1.7,1.7,2.8c0,0.4,1.1,10.5-4.7,18.5l0,0c-5.7,7.9-15.9,10.4-16.3,10.5C121.1,88.3,120.8,88.3,120.5,88.3"/></g><g><path class="st1" d="M125.5,46L125.5,46L125.5,46z M121.9,34.3c-2.2,2.1-4.6,5.1-5.8,8.9c-1.1,3.7-0.8,7.6-0.2,10.6c2.2-2.1,4.6-5.2,5.8-8.9C122.9,41.1,122.5,37.2,121.9,34.3 M113.9,64.5c-0.4,0-0.8-0.1-1.2-0.2c-1.1-0.3-2-1.1-2.5-2.1c-0.2-0.4-5-10.9-1.8-21.3s13-16.5,13.4-16.7c1-0.6,2.1-0.7,3.2-0.4s2,1.1,2.5,2.1c0.2,0.4,5,10.9,1.8,21.3s-13,16.5-13.4,16.7C115.4,64.3,114.6,64.5,113.9,64.5"/></g><g><path class="st1" d="M74.5,57.6c2.1,3.7,5.7,8.6,11,11.8c5.4,3.3,11.6,4.3,16,4.6c-2.1-3.7-5.7-8.6-11-11.8C85.1,58.9,78.9,57.8,74.5,57.6 M104.2,82.1c-5.2,0-14.6-0.8-22.9-5.9c-12-7.4-16.7-20.7-16.9-21.3c-0.4-1.1-0.3-2.4,0.4-3.4c0.6-1,1.7-1.7,2.9-1.8c0.6-0.1,15-1.6,27,5.7c12,7.4,16.7,20.7,16.9,21.3c0.4,1.1,0.3,2.4-0.4,3.4c-0.6,1-1.7,1.7-2.9,1.8C108.1,81.9,106.6,82.1,104.2,82.1"/></g></g><path class="st1" d="M104.7,162.4h6.6v27.2h-6.6V162.4z M74.6,130.5l33.4-17.3l33.4,17.2v59.8h-22.1v-35.7H96.8v35.7H74.6V130.5zM151.5,190.2v-66L108,101.8l-43.5,22.5v65.9H46.2v10.1h123.7v-10.1L151.5,190.2L151.5,190.2z"/></svg>', 'img/svg/location/location-icon-map.svg']

     //            ];


// Фильтрация, функция принимает в параметр  категорию из дата атрибута и сравнивает, используя метод гугл API setMap скрывает и показывает 
    filterMarkers = function (category) {
        for (i = 0; i < markers1.length; i++) {
            marker = gmarkers1[i];
            if (marker.category == category || category == 'all') {
                marker.setMap(map);
                // marker.setAnimation(google.maps.Animation.DROP);
            }
            else {
                marker.setMap(null)
            }
        }
    }

// функция вешает обработчик клика на все элементы списка и вызывает функцию filterMarkers передавая в нее значение дата атрибута
	var markItems = document.querySelectorAll('.mark-item');
				
	for (var i = 0; i < markItems.length; i++) {
		markItems[i].addEventListener('click', function() {
			console.log(markItems);
				
			markItems.forEach(function(item,i){
				if (item.classList.contains('active-map-item')) {
					item.classList.remove('active-map-item');
				}
			});
			
			this.classList.add('active-map-item');
			var category = this.dataset.category;
			filterMarkers(category);
		});
	}


// Функция добавления маркеров, берёт значение из масива вносит их в переменные и используя метод гугл API new google.maps.Marker клепает маркера
    function addMarker(marker) {
        var category = marker[4];
        var title = marker[1];
        var pos = new google.maps.LatLng(marker[2], marker[3]);
        var content = "<p class='content'>" + marker[6] + "</p>" ;
        var markerIcon = {
            url : marker[5]
        };
        marker1 = new google.maps.Marker({
            title: title,
            position: pos,
            category: category,
            map: map,
            icon: markerIcon,
            // animation: google.maps.Animation.DROP,
        });
        gmarkers1.push(marker1);
        // Marker click listener
        google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
            return function () {
                infowindow.setContent(content);	// установка нужного контента в всплывайку
                infowindow.open(map, marker1);	// открытие нужного окна
                map.panTo(this.getPosition());  // установка центра карты в координатах кликнутой иконки
            }
        })(marker1, content));
    }


// init карты все очевидно 
var map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: 50.433613, lng: 30.513188},
		    zoom: 13.7,
		    disableDefaultUI: true,
    		mapTypeId: google.maps.MapTypeId.ROADMAP
});




// настройка для смены языка проверяет адресную строку и в зависимости от выбраного языка подставляет нужный массив с данными
var uri = window.location.href;
	var searchIndex = uri.search('/ru/');
	if(searchIndex > -1){
		for (i = 0; i < markers2.length; i++) {
			addMarker(markers2[i]);
		}
	}else{
		for (i = 0; i < markers1.length; i++) {
			addMarker(markers1[i]);
		}
	}

// берёт json файл и стилизует карту согласно настройкам в нём
    $.getJSON('js/map-style.json', function (data) {
        map.setOptions({styles: data})
    })



// подробнее o методах и классах гугл API https://developers.google.com/maps/documentation/javascript/reference/
};

	/* Initialize
	 * ------------------------------------------------------ */
	 $(function hpInitMap() {
			mapBlock();
	 });

})(jQuery);
