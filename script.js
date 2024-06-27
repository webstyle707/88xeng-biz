var menu = document.querySelector(".menu");
// var menu = document.querySelector('.menu');
const hideNav = () => {
  menu.style.transition = "all 0.5s ease";
  menu.style.left = "-100%";
};

const showNav = () => {
  menu.style.transition = "all 0.5s ease";
  menu.style.left = "0%";
};

// container-right
document.querySelector(".container-right").innerHTML = `
<!-- 1 -->
          <div
            class="space-y-3 px-5 pt-5 pb-8 rounded border border-gray-200 shadow"
          >
            <h4 class="font-bold">QUẢNG CÁO</h4>
            <div class="space-y-3">
              <p class="w-9 border-2 border-[#550093]"></p>
              <img src="./Images/GIF-banner-1.gif" alt="" />
            </div>
          </div>
          <!-- 2 -->
          <div
            class="space-y-3 px-5 pt-5 pb-8 rounded border border-gray-200 shadow"
          >
            <h4 class="font-bold">DANH MỤC NHANH</h4>
            <div class="space-y-3">
              <p class="w-9 border-2 border-[#550093]"></p>

              <ul class="list-disc pl-4 space-y-2">
                <li class="*:text-[#550093]">
                  <a href="./casino.html">Casino</a>
                </li>
                
                <li class="*:text-[#550093]">
                  <a href="./huong-dan.html">Hướng dẫn</a>
                </li>
                <li class="*:text-[#550093]">
                  <a href="./khuyen-mai.html">Khuyến mãi</a>
                </li>
                <li class="*:text-[#550093]">
                  <a href="./slot.html">Slot</a>
                </li>
                <li class="*:text-[#550093]">
                  <a href="./tin-tuc.html">Tin tức</a>
                </li>
              </ul>
            </div>
          </div>

          <!-- 3 -->
          <div
            class="space-y-3 px-5 pt-5 pb-8 rounded border border-gray-200 shadow"
          >
            <h4 class="font-bold">BÀI VIẾT MỚI</h4>
            <div class="space-y-3">
              <p class="w-9 border-2 border-[#550093]"></p>

              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <div class="w-auto h-20">
                   
                     <a href="./keo-score-box.html">
                      <img class="h-full" src="./Images/card/2.jpg" alt="" />
                     </a>
                 
                  </div>
                  <div class="space-y-1 w-[65%]">
                    <h4 class="text-[#550093] text-[14px]">
                      <a href="./keo-score-box.html">
                        Kèo Score Box – Cách bắt cược kèo Score Box cho tân thủ
                      </a>
                    </h4>

                    <p class="text-[12px]">
                      <span>
                        <ion-icon name="calendar-outline"></ion-icon
                      ></span>
                      17/09/2023
                    </p>
                  </div>
                </div>
                

                <div class="flex items-center space-x-3">
                  <div class="w-auto h-20 overflow-hidden">
                   <a href="./ty-le-cuoc-indonesia.html">
                    <img class="h-full" src="./Images/card/3.jpg" alt="" />
                   </a>
                  </div>
                  <div class="space-y-1 w-[65%]">
                    <h4 class="text-[#550093] text-[14px]">
                      <a href="./ty-le-cuoc-indonesia.html">
                        Tỷ lệ cược Indonesia – Những điều cần biết khi bắt kèo
                      </a>
                    </h4>

                    <p class="text-[12px]">
                      <span>
                        <ion-icon name="calendar-outline"></ion-icon
                      ></span>
                      13/09/2023
                    </p>
                  </div>
                </div>

                <div class="flex items-center space-x-3">
                  <div class="w-[120px] h-20 overflow-hidden">
                   <a href="./keo-giu-sach-luoi.html">
                    <img
                    class="h-full w-full"
                    src="./Images/card/4.jpg"
                    alt=""
                  />
                   </a>
                  </div>
                  <div class="space-y-1 w-[65%]">
                    <h4 class="text-[#550093] text-[14px]">
                      <a href="./keo-giu-sach-luoi.html">
                        Kinh nghiệm giúp anh em chơi kèo giữ sạch lưới dễ thắng
                        nhất
                      </a>
                    </h4>

                    <p class="text-[12px]">
                      <span>
                        <ion-icon name="calendar-outline"></ion-icon
                      ></span>
                      09/09/2023
                    </p>
                  </div>
                </div>

                <div class="flex items-center space-x-3">
                  <div class="w-auto h-20 overflow-hidden">
                    <a href="./789bet.html">
                      <img class="h-full" src="./Images/card/1.jpeg" alt="" />
                    </a>
                  </div>
                  <div class="space-y-1 w-[65%]">
                    <h4 class="text-[#550093] text-[14px]">
                      <a href="./789bet.html">
                        789bet – Thiên Đường Cá Cược Hàng Đầu Châu Á Hot Nhất
                        2024
                      </a>
                    </h4>

                    <p class="text-[12px]">
                      <span>
                        <ion-icon name="calendar-outline"></ion-icon
                      ></span>
                      30/12/2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
`;
// footer
document.querySelector("#footer").innerHTML = `
  <div class="max-w-[1320px] mx-auto px-4 grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          <div class="space-y-3 md:space-y-5">
            <h5 class="font-bold uppercase text-xl pb-2 border-b border-white">
              XENG88APP.COM
            </h5>
            <p class="">
              Xeng88 hay 88xeng là nhà cái cá cược số 1 hiện nay. Cung cấp nhiều
              sản phẩm cá cược đa dạng như: Casino, xổ số, game bài, thể
              thao…Đăng ký Xeng88 tặng 100k tại xeng88.shop nhé. 🎉
            </p>
          </div>
          <div class="space-y-3 md:space-y-5">
            <div class="space-y-2">
              <h5
                class="font-bold uppercase text-xl pb-2 border-b border-white"
              >
                LIÊN HỆ
              </h5>
              <p>Website: https://xeng88.shop/</p>
            </div>
            <p class="">
              Địa chỉ: 24 Đường số 21, Phường 8, Gò Vấp, Thành phố Hồ Chí Minh,
              Việt Nam
            </p>
          </div>

          <div class="space-y-3 md:space-y-5">
            <div class="space-y-2">
              <h5
                class="font-bold uppercase text-xl pb-2 border-b border-white"
              >
                HƯỚNG DẪN
              </h5>
               <p>
                      <a href="./dang-ky-88xeng.html">Đăng ký 88xeng</a>
                </p>
            </div>
              <p>
                  <a href="./dang-nhap-xeng88-can-co-nhung-thu-tuc-nao.html"> Đăng nhập </a>
              </p>
             <p>
                  <a href="./nap-tien-88xeng.html"> Nạp tiền </a>
              </p>
              <p>
                  <a href="./rut-tien-88xeng.html"> Rút tiền </a>
              </p>
           
          </div>

          <div class="space-y-3 md:space-y-5">
            <div class="space-y-2">
              <h5
                class="font-bold uppercase text-xl pb-2 border-b border-white"
              >
                TRÒ CHƠI
              </h5>
                 <p>
                    <a href="./slot.html"> Slot </a>
                </p>
            </div>
             <p>
                 <a href="./casino.html"> Casino </a>
             </p>
          </div>
        </div>
 `;
