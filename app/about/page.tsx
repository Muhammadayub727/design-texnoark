"use client"
import React, { useEffect, useState } from 'react'
import Container from '../../components/container/page'
import Swiper from '../../components/swiper/page'
import Cookies from 'js-cookie'
import useProductStore from '@/store/products/page'
import { ToastContainer } from 'react-toastify'

function Index() {
  const [aboutactive, setAboutActive] = useState('Texnoark haqida')
  const arr = ['Texnoark haqida','Muddatli to’lov','Yordam','Tovarlarga kafolat','To‘lov usullari']
  
  const { products, getProducts } = useProductStore()
  
  useEffect(() => {
    setAboutActive(Cookies.get('aboutus') || 'Texnoark haqida')
    getProducts()
  }, [])
 
 
  return (
    <>
    <ToastContainer/>
      <div>
    <Container>
      <p className="flex gap-[10px] mt-[20px]">
        <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
          Bosh sahifa
        </span>
        <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
          Smartfonlar
        </span>
        <span className="block px-[18px] py-[6px] rounded bg-[white] font-medium">
        Tashkilot haqida
        </span>
      </p>
    </Container>
      </div>
    
    
    <div>
      <Container>
        <div className='flex gap-[12px] mt-[24px] flex-wrap max-sm:justify-center'>
          {
            arr.map((e,i) => {
              return (
                <button key={i} onClick={() => setAboutActive(e)} className={`py-[14px] px-[28px] w-[213px] font-bold text-[18px] rounded-xl max-sm:w-[100%] ${aboutactive == e? "bg-[#FF6F14] text-white duration-300" : "bg-white text-black duration-300"}`}>{e}</button>
              )
            })
          }
        </div>
      </Container>
    </div>
   
   
   
    <div>



      <div>
        <Container>
          <div className='bg-white px-[80px] py-[60px] mt-[24px] rounded-xl max-sm:px-[30px]'>
            {
              aboutactive == 'Texnoark haqida' && 
              <div>
                <h1 className='text-[44px] font-black mb-[32px]'>Texnoark haqida</h1>  
                <div className='flex justify-between'>
                  <div className='w-[560px]'>
                    <p className='text-[18px] text-justify mb-[30px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    <p className='text-[18px] text-justify mb-[30px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p>
                  </div>
                  <div className='w-[560px]'>
                    <p className='text-[18px] text-justify mb-[30px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    <p className='text-[18px] text-justify mb-[30px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English</p>
                  </div>
                </div>
              </div>
            }
            {
              aboutactive == 'Muddatli to’lov' &&
                <div>
                  <h1 className='text-[44px] font-black mb-[32px]'>Muddatli to’lov</h1>  
                  <div>
                    <h4 className='text-[24px] font-semibold mb-[10px]'>Условия рассрочки:</h4>
                    <div className=' pl-[30px]'>
                      <p className='text-[18px] '>1. Вам должно быть от 20 до 65 лет.</p>
                      <p className='text-[18px] '>2. Номер телефона, с которого вы зарегистрированы на Uzum Market, и номер телефона, который подключен к номеру карты для получения СМС-оповещений, должен быть один и тот же.</p>
                      <p className='text-[18px] '>3. Минимальная сумма заказа в рассрочку должна быть 35 000 сум.</p>
                      <p className='text-[18px] '>4. При выборе рассрочки на 3 месяца сумма одной покупки не должна превышать 5 000 000 сум.</p>
                    </div>
                    <h4 className='text-[24px] font-semibold mb-[10px] mt-[10px]'> Как оформить рассрочку?</h4>
                      <p className='text-[18px] '>1. Зарегистрируйтесь в приложении или на сайте Uzum Market.</p>
                      <p className='text-[18px] '>2. Положите необходимые товары в корзину и нажмите «Оформить».</p>
                      <p className='text-[18px] '>3. Вы можете выбрать доставку заказа до пункта выдачи Uzum Market, она бесплатна. Доставка до дома курьером оплачивается отдельно картой, либо наличными при получении - 30 000 сум. Если сумма заказа больше 1 000 000 сум, доставка бесплатна.</p>
                      <p className='text-[18px] '>4. Укажите получателя заказа: покупатель и получатель заказа должен быть один и тот же человек.</p>
                      <p className='text-[18px] '>5. В способе оплаты выберите рассрочку на удобный период: 3, 6 или 12 месяцев, и нажмите «Заполнить анкету». Отмечаем, что при выборе рассрочки на 3 месяца сумма одной покупки не должна превышать 5 000 000 сум.</p>
                  </div>
                </div>
            }
            {
              aboutactive == 'Yordam' &&
              <div>
              <h1 className='text-[44px] font-black mb-[32px]'>Yordam</h1>  
              <div>
                <h4 className='text-[24px] font-semibold mb-[10px]'>Как заказать?</h4>
                <div className=' pl-[30px]'>
                  <p className='text-[18px] '>1. Добавьте товары в корзину.</p>
                  <p className='text-[18px] '>2. Проверьте количество и характеристики товара: например, размер и цвет.</p>
                  <p className='text-[18px] '>3. Нажмите «Оформить».</p>
                  <p className='text-[18px] '>4. В разделе оформления заказа укажите способ доставки — в пункт выдачи или курьером.</p>
                  <p className='text-[18px] '>5. Введите и проверьте данные о получателе заказа*. Почему это важно? Потому что на номер телефона придет код выдачи заказа. Имя и фамилия понадобятся для сверки с паспортом, если вы заказали товар с возрастным ограничением или использовали промокод.
                  *При оформлении заказа в рассрочку, получателем заказа может быть только оформитель рассрочки.</p>
                  <p className='text-[18px] '>6. Введите промокод, если он есть. Актуальные промокоды можно найти на сайте https://uzum.uz, в наших соцсетях, пуш-уведомлениях или СМС.</p>
                  <p className='text-[18px] '>7. Если решите оплатить онлайн заказ, или оформить рассрочку позже, заказ будет зарезервирован на 30 минут. Более подробно в разделе: Как работает резерв заказа и промокода?</p>
                  <p className='text-[18px] '>8. При оплате заказа онлайн картой или в рассрочку, чек об оплате появится в личном кабинете под заказом, после получения заказа — «Электронный чек».</p>
                </div>
                
                </div>
            </div>
            }
            {
              aboutactive == "Tovarlarga kafolat" && 
              <div>
              <h1 className='text-[44px] font-black mb-[32px]'>Tovarlarga kafolat</h1>  
              <div>
                <h4 className='text-[24px] font-semibold mb-[10px]'>Условия возврата</h4>
                <p className='text-[18px]'>Для возврата товара надлежащего качества - отказаться от него возможно в любое время до передачи, либо при получении заказа в пункте выдачи или курьером.
                                          В иных случаях, принесите товар в пункт выдачи в течение 10 дней (для продуктов питания 24 часа) после получения, если у вас нет претензий к качеству товара.
                                          В пункте выдачи администратор осмотрит товар и убедится, что товар не был в использовании, у него сохранена упаковка со штрих кодом, заводские ярлыки, бирки, пломбы, товарный вид*, потребительские свойства.</p>
                <h4 className='text-[24px] font-semibold mb-[10px]'>Cогласно перечню законодательства следующие товары надлежащего качества не подлежат возврату (не принимаются обратно):</h4>
                <div className=' pl-[30px]'>
                  <p className='text-[18px] '>1. Товары для профилактики и лечения заболеваний в домашних условиях (предметы санитарии и гигиены из металла, резины, текстиля и других материалов, изделия медицинского назначения и медицинская техника, средства гигиены полости рта, линзы очковые, предметы по уходу за детьми, лекарственные препараты).</p>
                  <p className='text-[18px] '>2. Предметы личной гигиены (зубные щетки, расчески, заколки, бигуди для волос, парики, шиньоны и другие аналогичные товары).</p>
                  <p className='text-[18px] '>3. Парфюмерно-косметические товары.</p>
                  <p className='text-[18px] '>4. Текстильные товары (хлопчатобумажные, льняные, шелковые, шерстяные и синтетические ткани, товары из нетканых материалов, типа тканей — ленты, тесьма, кружево и другие); кабельная продукция (провода, шнуры, кабели); строительные и отделочные материалы (линолеум, пленка, ковровые покрытия и другие) и другие товары, отпускаемые на метраж.</p>
                  <p className='text-[18px] '>5. Швейные и трикотажные изделия (изделия швейные и трикотажные бельевые, чулочно-носочные и перчаточные изделия).
                  *При оформлении заказа в рассрочку, получателем заказа может быть только оформитель рассрочки.</p>
                  <p className='text-[18px] '>6. Изделия и материалы, контактирующие с пищевыми продуктами, из полимерных материалов, в том числе для разового использования (посуда и принадлежности столовые и кухонные, емкости и упаковочные материалы для хранения и транспортировки пищевых продуктов).</p>
                  <p className='text-[18px] '>7. Товары бытовой химии, пестициды и агрохимикаты.</p>
                </div>
                
                </div>
            </div>
            }
            {
              aboutactive == 'To‘lov usullari' && 
              <div>
              <h1 className='text-[44px] font-black mb-[32px]'>To‘lov usullari</h1>  
              <div>
                <h4 className='text-[24px] font-semibold mb-[10px]'>Оплата</h4>
                <p className='text-[18px]'>Вы можете выбрать удобный для вас способ оплаты:
                                          <br />
                                          - оплатите заказ онлайн картой Uzcard, Humo;
                                          <br />
                                          - оформите заказ в рассрочку Uzum Nasiya;
                                          <br />
                                          - оплатите при получении наличными или картами Uzcard, Humo, Visa, MasterCard.</p>
                <h4 className='text-[24px] font-semibold mb-[10px]'>Оплата онлайн</h4>
                <div className=' pl-[30px]'>
                  <p className='text-[18px] '>1. Вы можете оплатить заказ онлайн картой Uzcard, Humo.</p>
                  <p className='text-[18px] '>2. Чек об оплате появится в личном кабинете под заказом после его получения - «Электронный чек».</p>
                </div>
                
                </div>
            </div>
            }
          </div>
        </Container>
      </div>
    </div>
    <div className='mt-[60px]'>
      <Container>
        <h1 className='font-bold text-[32px] mb-[24px] max-sm:text-[20px]'>Aksiyadagi mahsulotlar</h1>
        <Swiper data={products}/>
      </Container>
    </div>
    </>
  )
}

export default Index