<!DOCTYPE html>
<html lang="ru">

<head>

	<meta charset="utf-8">

	<title>Saga</title>
	<meta name="description" content="">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	
	<link rel="stylesheet" href="css/main.min.css">


</head>

<body>

	<div class="block-top">
		<div class="block-top__img">
			<img src="img/logo-saga.svg" alt="logo">
		</div>
		<h1 class="block-top__title">Сага твого життя</h1>
		<div class="block-top__user">
			<form class="form-user">
				<div class="form-user__btn-big">
					<button class="button-in-big">Вхід</button>
				</div>
				<div class="form-user__user-in">
					<div class="form-user__row">
						<label for="logo" class="form-user__label">Логін</label>
						<input id="logo" type="text" class="form-user__input">
					</div>
					<div class="form-user__row">
						<label for="password" class="form-user__label">Пароль</label>
						<input id="password" type="text" class="form-user__input">
					</div>
					<div class="form-user__btn">
						<button class="button-in">Вхід</button>
					</div>
				</div>
			</form>
		</div>
	</div>
	
	<!-- begin map -->
		<div class="map-block">
			<div id="map" class="map-block__img"></div>
		</div>
	<!-- end map -->

	<!-- begin block -->
	<div class="block">
		<div class="block__info info">
			<h2 class="info__title title-lg-show"><span class="title-big">NEW YORK</span> Concept House</h2>
			<h3 class="info__subtitle">АМЕРИКАНСЬКА ЯКІСТЬ. УКРАЇНСЬКА ЦІНА.</h3>
			<p class="info__description">NEW YORK Concept House — це можливість дотримуватися американського стилю життя в самому центрі Києва.</p>
			<ul class="info__list">
				<li class="info__item">Унікальна архітектура</li>
				<li class="info__item">Консьєрж-сервіс</li>
				<li class="info__item">Розвинена інфраструктура навколо будинку</li>
				<li class="info__item">Система «Розумний будинок»</li>
				<li class="info__item">Зручна транспортна розв’язка</li>
				<li class="info__item">Квартири з терасами</li>
			</ul>
			<ul class="info__list-house">
				<li class="info__item-house">
					Клас житла:<span class="info__item-value"> бізнес + </span>
				</li>
				<li class="info__item-house">
					Кількість поверхів:<span class="info__item-value">22</span>
				</li>
				<li class="info__item-house">
					Кількість квартир:<span class="info__item-value">225</span>
				</li>
				<li class="info__item-house">
					Кількість паркомісць:<span class="info__item-value">21</span>
				</li>
			</ul>
			<ul class="info__list-house">
				<li class="info__item-house">
					Загальна площа <br> комерційних приміщень: <span class="info__item-value">1 610,68 м2</span>
				</li>
			</ul>
			<ul class="info__list-house">
				<li class="info__item-house">
					Площі квартир:
				</li>
				<li class="info__item-house">
					1-к:<span class="info__item-value">41 – 59 м2</span>
				</li>
				<li class="info__item-house">
					2-к:<span class="info__item-value">89,6 м2</span>
				</li>
				<li class="info__item-house">
					3-к:<span class="info__item-value">91 – 163,5 м2</span>
				</li>
				<li class="info__item-house">
					Пентхауси:<span class="info__item-value"> 87,4 – 204 м2</span>
				</li>
			</ul>
			<ul class="info__list-house">
				<li class="info__item-house">
					Адреса:<span class="info__item-value">вул. Антоновича, 74, Голосіївський район</span>
				</li>
			</ul>

		</div>

		<div class="block__img img-infra">
			<div class="img-infra__text">введено в експлуатацію</div>
			<div class="img-infra__location" data-popap-triger="map1">
				<img src="img/location-pin.png" alt="location">
			</div>
			<a href="#" class="img-infra__logo">
				<img src="img/new-york-logo.svg" alt="logo">
			</a>
			<div class="img-infra__images">
				<img src="img/new_york.png" alt="New York">
			</div>
			
			<div class="img-infra__button">
				<a href="#" class="btn">
					<span class="btn__text">ПЛАНУВАННЯ/ШАХМАТКА</span>
				</a>
				<div class="btn js-gallery" data-popap-triger="one">
					<span class="btn__text">ПЕРЕГЛЯНУТИ ГАЛЕРЕЮ</span>
				</div>
			</div>
		</div>
		<div class="info__title-tablet title-lg-hide">
			<h2 class="info__title title-gray"><span class="title-big">NEW YORK</span> Concept House</h2>
		</div>
		<!-- begin popap -->
		<div class="popap" data-popap="one">
			<div class="popap__inner">
				<div class="popap__in">
					<div class="gallery">
						<div class="gallery__item">
							<img src="img/new_york.png" alt="">
						</div>
						<div class="gallery__item">
							<img src="img/new_york.png" alt="">
						</div>
						<div class="gallery__item">
							<img src="img/new_york.png" alt="">
						</div>
					</div>
			
				
					<div class="gallery__btn">
						<div class="gallery__btn-prev">
							<img src="img/prev-arrov.svg" alt="arrow">Попереднє фото
						</div>
						<div class="gallery__btn-center">
							<a href="#" class="btn-plan">Планування шахматка</a>
						</div>
						<div class="gallery__btn-next">
							Наступне фото<img src="img/next-arrow.svg" alt="arrow">
						</div>
					</div>
					<div class="popap__close">
						<a href="#" class="btn-close">
							<img src="img/close.svg" alt="close">
						</a>
					</div>
				</div>
			</div>
			
		</div>
		<!-- end popap -->
		<!-- begin popap-map -->
			<div class="popap-map" data-popap="map1">
				<div class="popap-map__inner">
					<img src="img/map.jpg" alt="map">
				</div>
				<div class="popap-map__bottom">
					<div class="popap-map__btn">
						<a href="#" class="popap-map__google">
							<img src="img/google-maps.png" alt="google-maps">
							<span class="popap-map__icon-text">ВІДКРИТИ В GOOGLE</span>
						</a>
						<div class="popap-map__close">
							<a href="#" class="btn-close-map">
								<img src="img/close.svg" alt="close">
							</a>
						</div>
					</div>
				</div>
			</div>
		<!-- end popap-map -->

	</div>
	<!-- end block -->

	<!-- begin block -->
		<div class="block block__reverse">
			<div class="block__info info">
				<h2 class="info__title title-lg-show"><span class="title-big">NEW YORK</span> Concept House</h2>
				<h3 class="info__subtitle">АМЕРИКАНСЬКА ЯКІСТЬ. УКРАЇНСЬКА ЦІНА.</h3>
				<p class="info__description">NEW YORK Concept House — це можливість дотримуватися американського стилю життя в самому центрі Києва.</p>
				<ul class="info__list">
					<li class="info__item">Унікальна архітектура</li>
					<li class="info__item">Консьєрж-сервіс</li>
					<li class="info__item">Розвинена інфраструктура навколо будинку</li>
					<li class="info__item">Система «Розумний будинок»</li>
					<li class="info__item">Зручна транспортна розв’язка</li>
					<li class="info__item">Квартири з терасами</li>
				</ul>
				<ul class="info__list-house">
					<li class="info__item-house">
						Клас житла:<span class="info__item-value"> бізнес + </span>
					</li>
					<li class="info__item-house">
						Кількість поверхів:<span class="info__item-value">22</span>
					</li>
					<li class="info__item-house">
						Кількість квартир:<span class="info__item-value">225</span>
					</li>
					<li class="info__item-house">
						Кількість паркомісць:<span class="info__item-value">21</span>
					</li>
				</ul>
				<ul class="info__list-house">
					<li class="info__item-house">
						Загальна площа <br> комерційних приміщень: <span class="info__item-value">1 610,68 м2</span>
					</li>
				</ul>
				<ul class="info__list-house">
					<li class="info__item-house">
						Площі квартир:
					</li>
					<li class="info__item-house">
						1-к:<span class="info__item-value">41 – 59 м2</span>
					</li>
					<li class="info__item-house">
						2-к:<span class="info__item-value">89,6 м2</span>
					</li>
					<li class="info__item-house">
						3-к:<span class="info__item-value">91 – 163,5 м2</span>
					</li>
					<li class="info__item-house">
						Пентхауси:<span class="info__item-value"> 87,4 – 204 м2</span>
					</li>
				</ul>
				<ul class="info__list-house">
					<li class="info__item-house">
						Адреса:<span class="info__item-value">вул. Антоновича, 74, Голосіївський район</span>
					</li>
				</ul>
			</div>
			<div class="block__img img-infra">
				<div class="img-infra__text img-infra__text_reverse">введено в експлуатацію</div>
				<div class="img-infra__location img-infra__location_reverse"  data-popap-triger="map2">
					<img src="img/location-pin.png" alt="location">
				</div>
				<a href="#" class="img-infra__logo img-infra__logo_reverse">
					<img src="img/new-york-logo.png" alt="logo">
				</a>
				<div class="img-infra__images">
					<img src="img/new_york.png" alt="New York">
				</div>
				
				<div class="img-infra__button img-infra__button_reverse">
					<a href="#" class="btn">
						<span class="btn__text">ПЛАНУВАННЯ/ШАХМАТКА</span>
					</a>
					<div class="btn js-gallery" data-popap-triger="two">
						<span class="btn__text">ПЕРЕГЛЯНУТИ ГАЛЕРЕЮ</span>
					</div>
				</div>
			</div>
			<div class="info__title-tablet title-lg-hide">
				<h2 class="info__title title-gray"><span class="title-big">NEW YORK</span> Concept House</h2>
			</div>
			<!-- begin popap -->
			<div class="popap" data-popap="two">
				<div class="popap__inner">
					<div class="popap__in">
						<div class="gallery">
							<div class="gallery__item">
								<img src="img/gallery-chicago.png" alt="">
							</div>
							<div class="gallery__item">
								<img src="img/gallery-chicago.png" alt="">
							</div>
							<div class="gallery__item">
								<img src="img/gallery-chicago.png" alt="">
							</div>
						</div>
						<div class="gallery__btn">
							<div class="gallery__btn-prev">
								<img src="img/prev-arrov.svg" alt="arrow">Попереднє фото
							</div>
							<div class="gallery__btn-center">
								<a href="#" class="btn-plan">Планування шахматка</a>
							</div>
							<div class="gallery__btn-next">
								Наступне фото<img src="img/next-arrow.svg" alt="arrow">
							</div>
						</div>
						<div class="popap__close">
							<a href="#" class="btn-close">
								<img src="img/close.svg" alt="close">
							</a>
						</div>
					</div>
				</div>
				
			</div>
			<!-- end popap -->
			<!-- begin popap-map -->
				<div class="popap-map" data-popap="map2">
					<div class="popap-map__inner">
						<img src="img/map.jpg" alt="map">
					</div>
					<div class="popap-map__bottom">
						<div class="popap-map__btn">
							<a href="#" class="popap-map__google">
								<img src="img/google-maps.png" alt="google-maps">
								<span class="popap-map__icon-text">ВІДКРИТИ В GOOGLE</span>
							</a>
							<div class="popap-map__close">
								<a href="#" class="btn-close-map">
									<img src="img/close.svg" alt="close">
								</a>
							</div>
						</div>
					</div>
				</div>
			<!-- end popap-map -->
		</div>
	<!-- end block -->
	
	 <!-- <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script> -->
	
	<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script> -->
	
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3v4tMpbXGrrr2GY00coDwi9YeP4aqyA4&amp;language=uk&amp;ver=1.16"></script>
	<script src="js/scripts.min.js"></script>
	<script src="js/common.js"></script>
	
</body>
</html>
