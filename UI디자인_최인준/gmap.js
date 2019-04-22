function initialize() {
	/* http://openapi.map.naver.com/api/geocode.php?key=AIzaSyBycKZYweoTna9GEVe1TcxwEil9KSACRXU&encoding=euc-kr
			&coord=LatLng&query=서울특별시 강남구 강남대로 456
       위의 링크에서 뒤에 주소를 적으면 x,y 값을 구할수 있습니다. */
            var Y_point = 35.064619 ;     // Y 좌표
            var X_point = 126.986678;   // X 좌표

            var zoomLevel = 17;         // 지도의 확대 레벨 : 숫자가 클수록 확대정도가 큼
			
         	// 현재 위치 마커에 마우스를 오버을때 나타나는 정보
            var markerTitle = "화순군청"; 
            var markerMaxWidth = 300; // 마커를 클릭했을때 나타나는 말풍선의 최대 크기

            // 말풍선 내용
            var contentString    = '<div>' +
                                   '<h2>화순군청</h2>'+
                                   '<p>부패의 온상 군수 돌려먹기의 고장<br/>' +
                                   '공약으로 군수 임기 채우기가 나오는 쓰레기 동네.</p>' +
            //'<a href="http://www.daegu.go.kr" target="_blank">http://www.daegu.go.kr</a>'+ //링크도 넣을 수 있음
                                   '</div>';

            var myLatlng = new google.maps.LatLng(Y_point, X_point);
            var mapOptions = {
	            zoom: zoomLevel,
	            center: myLatlng,
	            mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(document.getElementById('map_view'), 
            		  mapOptions);

            var marker = new google.maps.Marker({
            	position: myLatlng,
            	map: map,
            	title: markerTitle
            });

            var infowindow = new google.maps.InfoWindow(
	           {
	                   content: contentString,
	                   maxWidth: markerMaxWidth
	           }
            );

            google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map, marker);
            });
    }