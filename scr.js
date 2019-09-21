function init() {
     var divForm = document.getElementById('form_osago_elmark');
     // divForm.innerHTML = `<div id="form_osago_elmark"><form id="form-osago"><h2>ОСАГО онлайн - купить электронный полис</h2><div class="steps"><div class="level act"><span class="step-numb">01</span><span class="step-text">Данные об <br>автомобиле</span></div><div class="level line act"></div><div class="level"><span class="step-numb">02</span><span class="step-text">Параменты <br>страхования</span></div><div class="level line"></div><div class="level"><span class="step-numb">03</span><span class="step-text">Сведения о <br>водителях</span></div><div class="level line"></div><div class="level"><span class="step-numb">04</span><span class="step-text">Результаты <br>страхования</span></div></div><section class="first-step act"><div class="about-info-auto"><h3>Основная информация об автомобиле</h3><div class="block about-info-auto_block"><div class="block-inputs"><div class="item-inp"><h4 class="req">Категория</h4><select name="vehicle_type"><option value="B" selected >B</option></select></div><div class="item-inp"><h4 class="req">Марка ТС</h4><input type="text" name="vehicle_mark" value="" placeholder="Напр., Mercedes Benz"></div><div class="item-inp"><h4 class="req">Модель ТС <span class="icon_ques" tooltip="Введите данные вручную, если необходимой модели нет в списке."></span></h4><input type="text" name="vehicle_model" value="" placeholder="Напр., S-Class"></div><div class="item-inp"><h4 class="req">Год выпуска</h4><input type="text" name="vehicle_year" value="" placeholder="2009"></div><div class="item-inp"><h4 class="req">Мощность, л.с.</h4><input type="text" name="vehicle_power" value="" placeholder="205"></div></div><div class="auto-trailer"><input type="checkbox" name="with_trailer" id="checkbox-2"><label for="checkbox-2"><span class="checkbox">Автомобиль используется с прицепом</span></label></div></div></div><div class="about-identification-auto"><h3>Идентификатор автомобиля</h3><div class="block about-identification-auto_block"><div class="row"><div class="col-lg-6 col-md-6"><div class="block-inputs"><div class="item-inp"><h4 class="req">Гос. номер</h4><input type="text" name="vehicle_number" value="" placeholder="Напр., A 123 MP"></div><div class="item-inp"><h4 class="req">Регион</h4><input type="text" name="vehicle_region" value="" placeholder="777"></div><div class="item-inp"><input type="checkbox" name="no_vehicle_number" id="checkbox-3"><label for="checkbox-3" id="no-gos-numb"><span class="checkbox">Пока нет гос. номера</span></label></div></div></div><div class="col-lg-6 col-md-6"><div class="number-auto-block"><div class="number-auto-block-top"><div class="item-inp"><input type="radio" name="vehicle_id" value="vin" checked id="checkbox-4"><label for="checkbox-4"><span class="radio">VIN</span></label></div><div class="item-inp"><input type="radio" name="vehicle_id" value="body_number" id="checkbox-5"><label for="checkbox-5"><span class="radio">Номер кузова</span></label></div><div class="item-inp"><input type="radio" name="vehicle_id" value="chassis_number" id="checkbox-6"><label for="checkbox-6"><span class="radio">Номер шасси</span></label></div></div><div class="number-auto-block-bottom"><input type="text" name="vehicle_id_number" maxlength="17" value="" placeholder="Напр., WAUZZZ44ZEN096063" /></div></div></div></div></div></div><div class="doc-tech"><div class="row"><div class="col-lg-6 col-md-6"><h3>Документ на автомобиль</h3><div class="doc-tech block"><div class="doc-radio"><div class="item-inp"><input type="radio" name="vehicle_document" checked value="STS" id="checkbox-7"><label for="checkbox-7"><span class="radio">СТС</span></label></div><div class="item-inp"><input type="radio" name="vehicle_document" value="PTS" id="checkbox-8"><label for="checkbox-8"><span class="radio">ПТС</span></label></div></div><div class="doc-info"><div class="item-inp vehicle_document_number"><h4 class="req">Серия, номер</h4><input type="text" name="vehicle_document_number" value="" placeholder="Напр., 62ОК 122123"></div><div class="item-inp vehicle_document_date"><h4 class="req">Когда выдан</h4><input type="text" name="vehicle_document_date" class="date_mask" value="" placeholder="30.10.2009"></div></div></div></div><div class="col-lg-6 col-md-6"><h3>Тех. осмотр</h3><div class="diagnost block"><span class="txt">Введите данные диагностической карты:</span><div class="diagnost-info"><div class="item-inp diag_card_number"><h4 class="req">Номер карты</h4><input type="text" name="diag_card_number" value="" placeholder="Напр., 62ОК 122123"></div><div class="item-inp diag_card_to_date"><h4 class="req">Действительна до</h4><input type="text" name="diag_card_to_date" value="" class="date_mask" placeholder="30.12.2020"></div></div></div></div></div></div></section><section class="second-step"><div class="about-identification-insure"><h3>Страхователь</h3><div class="block"><div class="sex-driver"><div class="item-inp"><input type="radio" name="insurer_gender" value="M" checked id="insurer_gender1"><label for="insurer_gender1"><span class="radio">Муж.</span></label></div><div class="item-inp"><input type="radio" name="insurer_gender" value="F" id="insurer_gender2"><label for="insurer_gender2"><span class="radio">Жен.</span></label></div></div><div class="info-deriver"><div class="item-inp"><h4 class="req">Фамилия</h4><input type="text" name="insurer_last_name" value="" placeholder="Напр., Иванов"></div><div class="item-inp"><h4 class="req">Имя</h4><input type="text" name="insurer_first_name" value="" placeholder="Напр., Иван"></div><div class="item-inp"><h4 class="req">Отчество</h4><input type="text" name="insurer_middle_name" value="" placeholder="Напр., Иванович"></div><div class="item-inp"><h4 class="req">Дата рождения</h4><input type="text" name="insurer_birth_date" class="date_mask" value="" placeholder="Напр., 30.09.1979"></div></div><div class="info-deriver"><div class="item-inp"><h4 class="req">Серия, номер паспорта</h4><input type="text" name="insurer_passport_data" value="" placeholder="Напр., 1122 345678"></div><div class="item-inp"><h4 class="req">Когда выдан паспорт</h4><input type="text" name="insurer_passport_date" value="" class="date_mask" placeholder="Напр., 22.02.2008"></div><div class="item-inp"><h4 class="req">Кем выдан паспорт</h4><input type="text" name="insurer_passport_issued_by" value="" placeholder="Напр., МВД"></div><div class="item-inp insurer_full_address"><h4 class="req">Адрес регистрации (полный)</h4><input type="text" name="insurer_full_address" id="insurer_full_address" value="" placeholder="Напр., г. Москва"></div></div><div class="info-deriver data-VU"><div class="item-inp"><h4>Место рождения</h4><input type="text" name="insurer_birth_place" value="" placeholder=""></div><div class="item-inp"><h4>Серия, номер ВУ</h4><input type="text" name="insurer_driver_license_number" value="" placeholder=""></div><div class="item-inp"><h4>Дата выдачи ВУ</h4><input type="text" name="insurer_driver_license_date" value="" class="date_mask" placeholder=""></div><div class="item-inp"><h4>Дата выдачи первого ВУ</h4><input type="text" name="insurer_driver_date_begin" value="" class="date_mask" placeholder=""></div></div></div><h3>Собственник</h3><div class="block"><div class="drivers-radio"><div class="item-inp"><input type="radio" name="owner" value="insurer" checked id="insurer1"><label for="insurer1"><span class="radio">Совпадает со страхователем</span></label></div><div class="item-inp"><input type="radio" name="owner" value="another" id="insurer2"><label for="insurer2"><span class="radio">Другой</span></label></div></div><div class="other-owner-two"></div></div></div></section><section class="three-step"><div class="drivers-radio"><div class="item-inp"><input type="radio" name="drivers" value="unlimited" checked id="checkbox-9"><label for="checkbox-9"><span class="radio">Неограниченное количество водителей </span></label></div><div class="item-inp"><input type="radio" name="drivers" value="limited" id="checkbox-10"><label for="checkbox-10"><span class="radio">1 и более</span></label></div></div><div class="drivers"><div class="driver-sect"></div></div><div class="add-driver"><span class="button-driver"><b>+</b> Добавить водителя</span></div><div class="about-identification-auto"><h3>Полис и Ваши контактные данные</h3><div class="block"><div class="contacts"><div class="item-inp policy_from_date"><h4 class="req">Срок страхования с</h4><input type="text" class="date_mask" value="" name="policy_from_date" placeholder="12.08.2019"></div><div class="item-inp"><h4 class="req">Период страхования</h4><select name="insurance_period"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="12" selected >12</option></select></div><div class="item-inp mail_agent"><h4 class="req">E-mail</h4><input type="email" name="agent_email" value="" placeholder="Напр., eosago@mail.ru"></div><div class="item-inp"><h4 class="req">Номер телефона</h4><input type="text" name="agent_phone" value="" placeholder="+7 (911) 123 45 67 "><input type="hidden" id="contractID" value=""></div></div><div><span class="of_to"></span></div></div></div></section><section class="four-step"><div class="about-identification-auto"><h3>Выберите страховую компанию</h3><div class="tablePayment"></div><div class="preview"></div></div></section></form><div class="foot-button sec_first act"><div class="button sect2 ">Далее</div></div><div class="foot-button sec_second"><div class="button prev1 act">Назад</div><div class="button sect3 ">Далее</div></div><div class="foot-button sec_three"><div class="button prev2 act">Назад</div><div class="button sect4 ">Рассчитать</div></div><div class="foot-button sec_four"><div class="button prev3 act">Редактировать</div></div></div>`;
     divForm.innerHTML = `
     <div id="form_osago_elmark">
   <form id="form-osago">
      <h2>ОСАГО онлайн - купить полис</h2>
      <span class="garant">Гарантия подлинности полиса ОСАГО и его наличие в базе РСА</span>
      <div class="steps">
         <div class="level act"><span class="step-numb">01</span><span class="step-text">Данные об <br>автомобиле</span></div>
         <div class="level line act"></div>
         <div class="level"><span class="step-numb">02</span><span class="step-text">Параметры <br>страхования</span></div>
         <div class="level line"></div>
         <div class="level"><span class="step-numb">03</span><span class="step-text">Сведения о <br>водителях</span></div>
         <div class="level line"></div>
         <div class="level"><span class="step-numb">04</span><span class="step-text">Результаты <br>страхования</span></div>
      </div>
      <section class="first-step act">
         <div class="about-info-auto">
            <h3>Основная информация об автомобиле</h3>
            <div class="block about-info-auto_block">
               <div class="block-inputs">
                  <div class="item-inp">
                     <h4 class="req">Категория</h4>
                     <select name="vehicle_type">
                        <option value="B" selected >B</option>
                     </select>
                  </div>
                  <div class="item-inp">
                     <h4 class="req">Марка ТС</h4>
                     <input type="text" name="vehicle_mark" value="" placeholder="Напр., Mercedes Benz">
                  </div>
                  <div class="item-inp">
                     <h4 class="req">Модель ТС <span class="icon_ques" tooltip="Введите данные вручную, если необходимой модели нет в списке."></span></h4>
                     <input type="text" name="vehicle_model" value="" placeholder="Напр., S-Class">
                  </div>
                  <div class="item-inp">
                     <h4 class="req">Год выпуска</h4>
                     <input type="text" name="vehicle_year" value="" placeholder="2009">
                  </div>
                  <div class="item-inp">
                     <h4 class="req">Мощность, л.с.</h4>
                     <input type="text" name="vehicle_power" value="" placeholder="205">
                  </div>
               </div>
               <div class="auto-trailer"><input type="checkbox" name="with_trailer" id="checkbox-2"><label for="checkbox-2"><span class="checkbox">Автомобиль используется с прицепом</span></label></div>
            </div>
         </div>
         <div class="about-identification-auto">
            <h3>Идентификатор автомобиля</h3>
            <div class="block about-identification-auto_block">
               <div class="row">
                  <div class="col-lg-6 col-md-6">
                     <div class="block-inputs">
                        <div class="item-inp">
                           <h4 class="req">Гос. номер</h4>
                           <input type="text" name="vehicle_number" value="" placeholder="Напр., A 123 MP">
                        </div>
                        <div class="item-inp">
                           <h4 class="req">Регион</h4>
                           <input type="text" name="vehicle_region" value="" placeholder="777">
                        </div>
                        <div class="item-inp"><input type="checkbox" name="no_vehicle_number" id="checkbox-3"><label for="checkbox-3" id="no-gos-numb"><span class="checkbox">Пока нет гос. номера</span></label></div>
                     </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                     <div class="number-auto-block">
                        <div class="number-auto-block-top">
                           <div class="item-inp"><input type="radio" name="vehicle_id" value="vin" checked id="checkbox-4"><label for="checkbox-4"><span class="radio">VIN</span></label></div>
                           <div class="item-inp"><input type="radio" name="vehicle_id" value="body_number" id="checkbox-5"><label for="checkbox-5"><span class="radio">Номер кузова</span></label></div>
                           <div class="item-inp"><input type="radio" name="vehicle_id" value="chassis_number" id="checkbox-6"><label for="checkbox-6"><span class="radio">Номер шасси</span></label></div>
                        </div>
                        <div class="number-auto-block-bottom"><input type="text" name="vehicle_id_number" maxlength="17" value="" placeholder="Напр., WAUZZZ44ZEN096063" /></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="doc-tech">
            <div class="row">
               <div class="col-lg-6 col-md-6">
                  <h3>Документ на автомобиль</h3>
                  <div class="doc-tech block">
                     <div class="doc-radio">
                        <div class="item-inp"><input type="radio" name="vehicle_document" checked value="STS" id="checkbox-7"><label for="checkbox-7"><span class="radio">СТС</span></label></div>
                        <div class="item-inp"><input type="radio" name="vehicle_document" value="PTS" id="checkbox-8"><label for="checkbox-8"><span class="radio">ПТС</span></label></div>
                     </div>
                     <div class="doc-info">
                        <div class="item-inp vehicle_document_number">
                           <h4 class="req">Серия, номер</h4>
                           <input type="text" name="vehicle_document_number" value="" placeholder="Напр., 62ОК 122123">
                        </div>
                        <div class="item-inp vehicle_document_date">
                           <h4 class="req">Когда выдан</h4>
                           <input type="text" name="vehicle_document_date" class="date_mask" value="" placeholder="30.10.2009">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-6 col-md-6">
                  <h3>Тех. осмотр</h3>
                  <div class="diagnost block">
                     <span class="txt">Введите данные диагностической карты:</span>
                     <div class="diagnost-info">
                        <div class="item-inp diag_card_number">
                           <h4 class="req">Номер карты</h4>
                           <input type="text" name="diag_card_number" value="" placeholder="">
                        </div>
                        <div class="item-inp diag_card_to_date">
                           <h4 class="req">Действительна до</h4>
                           <input type="text" name="diag_card_to_date" value="" class="date_mask" placeholder="30.12.2020">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section class="second-step">
         <div class="about-identification-insure">
            <h3>Страхователь</h3>
            <div class="block">
               <div class="sex-driver">
                  <div class="item-inp"><input type="radio" name="insurer_gender" value="M" checked id="insurer_gender1"><label for="insurer_gender1"><span class="radio">Муж.</span></label></div>
                  <div class="item-inp"><input type="radio" name="insurer_gender" value="F" id="insurer_gender2"><label for="insurer_gender2"><span class="radio">Жен.</span></label></div>
               </div>
               <div class="info-deriver">
                  <div class="item-inp">
                     <h4 class="req">Фамилия</h4>
                     <input type="text" name="insurer_last_name" value="" placeholder="Напр., Иванов">
                  </div>
                  <div class="item-inp">
                     <h4 class="req">Имя</h4>
                     <input type="text" name="insurer_first_name" value="" placeholder="Напр., Иван">
                  </div>
                  <div class="item-inp">
                     <h4 class="req">Отчество</h4>
                     <input type="text" name="insurer_middle_name" value="" placeholder="Напр., Иванович">
                  </div>
                  <div class="item-inp">
                     <h4 class="req">Дата рождения</h4>
                     <input type="text" name="insurer_birth_date" class="date_mask" value="" placeholder="Напр., 30.09.1979">
                  </div>
               </div>
               <div class="info-deriver">
                  <div class="item-inp">
                     <h4 class="req">Серия, номер паспорта</h4>
                     <input type="text" name="insurer_passport_data" value="" placeholder="Напр., 1122 345678">
                  </div>
                  <div class="item-inp">
                     <h4 class="req">Когда выдан паспорт</h4>
                     <input type="text" name="insurer_passport_date" value="" class="date_mask" placeholder="Напр., 22.02.2008">
                  </div>
                  <div class="item-inp">
                     <h4 class="req">Кем выдан паспорт</h4>
                     <input type="text" name="insurer_passport_issued_by" value="" placeholder="Напр., МВД">
                  </div>
                     <div class="item-inp">
                     <h4>Место рождения</h4>
                     <input type="text" name="insurer_birth_place" value="" placeholder="">
                  </div>
               </div>
               <div class="item-inp insurer_full_address">
                    <h4 class="req">Адрес регистрации (полный)</h4>
                    <input type="text" name="insurer_full_address" id="insurer_full_address" value="" placeholder="Напр., г. Москва">
               </div>
               <!--<div class="info-deriver data-VU">-->
               <!---->
                  <!--<div class="item-inp">-->
                     <!--<h4>Серия, номер ВУ</h4>-->
                     <!--<input type="text" name="insurer_driver_license_number" value="" placeholder="">-->
                  <!--</div>-->
                  <!--<div class="item-inp">-->
                     <!--<h4>Дата выдачи ВУ</h4>-->
                     <!--<input type="text" name="insurer_driver_license_date" value="" class="date_mask" placeholder="">-->
                  <!--</div>-->
                  <!--<div class="item-inp">-->
                     <!--<h4>Дата выдачи первого ВУ</h4>-->
                     <!--<input type="text" name="insurer_driver_date_begin" value="" class="date_mask" placeholder="">-->
                  <!--</div>-->
               <!--</div>-->
            </div>
            <h3>Собственник</h3>
            <div class="block">
               <div class="drivers-radio">
                  <div class="item-inp"><input type="radio" name="owner" value="insurer" checked id="insurer1"><label for="insurer1"><span class="radio">Совпадает со страхователем</span></label></div>
                  <div class="item-inp"><input type="radio" name="owner" value="another" id="insurer2"><label for="insurer2"><span class="radio">Другой</span></label></div>
               </div>
               <div class="other-owner-two"></div>
            </div>
         </div>
      </section>
      <section class="three-step">
       <div class="block">
         <div class="drivers-radio">
            <div class="item-inp"><input type="radio" name="drivers" value="unlimited"  id="checkbox-9"><label for="checkbox-9"><span class="radio">Неограниченное количество водителей </span></label></div>
            <div class="item-inp"><input type="radio" name="drivers" value="limited" checked id="checkbox-10"><label for="checkbox-10"><span class="radio">1 и более</span></label></div>
         </div>

         <div class="drivers">
            <div class="driver-sect">
               <div class="driver">
                               <span class="numb-driver">1й водитель</span>
                           </div>
                             <span class="copy-owner">Скопировать данные собственника</span>
                             <span class="copy-owner" id="copy_data_insur">Скопировать данные страхователя</span>
                           <div class="info-driver block">
                               <div class="sex-driver">
                                   <div class="item-inp">
                                       <input type="radio" name="drivers_0__gender" value="M" checked id="gender-2">
                                       <label for="gender-2"><span class="radio">Муж.</span></label>
                                   </div>
                                   <div class="item-inp">
                                       <input type="radio" name="drivers_0__gender" value="F" id="checkbox-22">
                                       <label for="checkbox-22"><span class="radio">Жен.</span></label>
                                   </div>
                               </div>
                               <div class="info-deriver">
                                   <div class="item-inp">
                                       <h4 class="req">Фамилия</h4>
                                       <input type="text" name="drivers_0__last_name" placeholder="Напр., Иванов">
                                   </div>
                                   <div class="item-inp">
                                       <h4 class="req">Имя</h4>
                                       <input type="text" name="drivers_0__first_name" placeholder="Напр., Иван">
                                   </div>
                                   <div class="item-inp">
                                       <h4 class="req">Отчество</h4>
                                       <input type="text" name="drivers_0__middle_name" placeholder="Напр., Иванович">
                                   </div>
                                   <div class="item-inp">
                                       <h4 class="req">Дата рождения</h4>
                                       <input type="text" class="date_mask" name="drivers_0__birth_date" placeholder="Напр., 30.09.1979">
                                   </div>
                               </div>

                               <div class="info-deriver">
                                   <div class="item-inp">
                                       <h4 class="req">Место рождения</h4>
                                       <input type="text" name="drivers_0__birth_place" id="one-add-from" placeholder="">
                                   </div>
                                   <div class="item-inp">
                                       <h4 class="req">Серия, номер ВУ</h4>
                                       <input type="text" class="vu_mask" name="drivers_0__driver_license_number" placeholder="____ ______">
                                   </div>
                                   <div class="item-inp">
                                       <h4 class="req">Дата выдачи ВУ</h4>
                                       <input type="text" class="date_mask"  name="drivers_0__driver_license_date" placeholder="__.__.____">
                                   </div>
                                   <div class="item-inp">
                                       <h4 class="req">Дата выдачи первого ВУ</h4>
                                       <input type="text" class="date_mask" name="drivers_0__driver_date_begin" placeholder="__.__.____">
                                   </div>

                               </div>

                               <div class="info-deriver ">
                                   <div class="item-inp driver_license_issued_by">
                                       <h4 class="req">Кем выдано ВУ</h4>
                                       <input type="text" name="drivers_0__driver_license_issued_by" placeholder="">
                                   </div>
                               </div>
                           </div>
            </div>
         </div>
         </div>
         <div class="add-driver"><span class="button-driver"><b>+</b> Добавить водителя</span></div>

         <div class="about-identification-auto">
            <h3>Полис и Ваши контактные данные</h3>
            <div class="block">
               <div class="contacts">
                  <div class="item-inp policy_from_date">
                     <h4 class="req">Срок страхования с</h4>
                     <input type="text" class="date_mask" value="" name="policy_from_date" placeholder="12.08.2019">
                  </div>
                  <div class="item-inp">
                     <h4 class="req">Период страхования</h4>
                     <select name="insurance_period">
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="12" selected >12</option>
                     </select>
                  </div>
                  <div class="item-inp mail_agent">
                     <h4 class="req">E-mail</h4>
                     <input type="email" name="agent_email" value="" placeholder="Напр., eosago@mail.ru">
                  </div>
                  <div class="item-inp">
                     <h4 class="req">Номер телефона</h4>
                     <input type="text" name="agent_phone" value="" placeholder="+7 (911) 123 45 67 "><input type="hidden" id="contractID" value="">
                  </div>
               </div>
               <div><span class="of_to"></span></div>
            </div>
         </div>
      </section>
      <section class="four-step">
         <div class="about-identification-auto">
            <h3>Выберите страховую компанию</h3>
            <div class="tablePayment"></div>
            <div class="preview"></div>
         </div>
      </section>
   </form>
   <div class="foot-button sec_first act">
      <div class="button-fe sect2 ">Далее</div>
   </div>
   <div class="foot-button sec_second">
      <div class="button-fe prev1 act">Назад</div>
      <div class="button-fe sect3 ">Далее</div>
   </div>
   <div class="foot-button sec_three">
      <div class="button-fe prev2 act">Назад</div>
      <div class="button-fe sect4 ">Рассчитать</div>
   </div>
   <div class="foot-button sec_four">
      <div class="button-fe prev3 act">Редактировать</div>
   </div>
</div>
     `;
     var body = document.body;
     var head = document.head;

     var linkArrayCss = [
          'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css',
          // 'https://form.osago24.org/css/font.css',
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,800,900&amp;subset=cyrillic,cyrillic-ext',
          'https://form.osago24.org/css/template_style.css',
          'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
     ];
     var linkArrayJS = [
          'https://form.osago24.org/js/jquery-1.12.4.js',
          'https://form.osago24.org/js/jquery-ui.js',
          'https://form.osago24.org/js/jquery.maskedinput.min.js',
          'https://momentjs.com/downloads/moment.js',
          'https://ahunter.ru/js/min/ahunter_suggest.js',
          'https://form.osago24.org/js/endpoint.js?5',
          'https://form.osago24.org/js/validator.js',
          'https://form.osago24.org/js/script.js'
     ];
     for (var io = 0; io < linkArrayJS.length; io++) {
          var jsLink = document.createElement("script");
          jsLink.src = linkArrayJS[io];
          jsLink.async = false;
          jsLink.charset = "utf-8";
          body.insertBefore(jsLink, body.firstChild);
     }


     for (var i = linkArrayCss.length-1; i >= 0 ; i--) {
          var cssLink = document.createElement('link');
          cssLink.href = linkArrayCss[i];
          cssLink.rel = 'stylesheet';
          body.insertBefore(cssLink, body.firstChild);
     }


}
