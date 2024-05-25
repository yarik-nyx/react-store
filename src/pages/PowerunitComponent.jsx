import React from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

import './PowerunitComponent.scss'


const PowerunitComponent = () => {

    const [data, setData] = React.useState()

    const {id} = useParams()

    const navigate = useNavigate()

    const fetchComponent = async () => {
        try {
            const {data} = await axios.get(`https://663117eac92f351c03dc28bf.mockapi.io/items/${id}`)
            setData(data)
        } catch (error) {
            alert('Компонент не найден')
            navigate('/')
        }
        
    }

    React.useEffect(() => {
        fetchComponent()
    }, [])

    if(!data){
        return 
    }

    return (
        <>
            <div class="e19lhdq00 app-catalog-1sbr2xg e164boj10" data-meta-name="">
            <div data-meta-name="ProductHeaderLayout" class="app-catalog-1xdhyk6 e19nkc9p0">
                <div class="app-catalog-64xkav eyocz9l0"></div>
                <div data-meta-name="ProductHeaderLayout__title" class="app-catalog-3z12b7 eotjnw00">
                    <h1 class="e1ubbx7u0 eml1k9j0 app-catalog-lc5se5 e1gjr6xo0" color="Main">Блок питания {data.title}</h1>
                </div>
                <div class="app-catalog-1xdhyk6 e13k8jft0">
                    <div class="app-catalog-1kldss0 eyoh4ac0">
                        <div class="app-catalog-k008qs e2kybqa1">
                            <div class="e8eovjk0 app-catalog-1uwfsq8 e2kybqa2">
                                <span class="e1fsc6a40 app-catalog-6po9t6 e14kw8wi0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="256" height="256"><path fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" class="colorf8b84e svgShape"></path></svg>
                                </span>{data.rating}</div>
                        </div>
                    </div>
                </div>
                <div class="app-catalog-1u5zjt4 e6riv00">
                    <div data-meta-name="ProductHeaderContentLayout" class="app-catalog-azyzeh e1aeug4v0">
                        <div data-meta-name="ProductHeaderContentLayout__first-column" class="app-catalog-qhusmh eme04gi0">
                            <div class="fresnel-container fresnel-lessThan-tabletL "></div>
                            <div class="app-catalog-14d5zh9 ea094bj0">
                                <div class="app-catalog-6wzbgz e1gmzyly0">
                                    <div class="app-catalog-108zwaa e1a4o93w0">
                                        <div data-meta-name="ImageGalleryLayout" class="app-catalog-1658s9 e1dhwmgv0">
                                            <div class="app-catalog-1jlnwea e96jk6p0">
                                                <div class="app-catalog-vh0pgf emaecg90">
                                                    <div class="ep5h2on0 app-catalog-13dx3zi e1u4mxfe0 is-draggable" data-meta-name="ImageGallery__main">
                                                        <div class="app-catalog-zqea8a e153n9o30">
                                                            <div data-meta-id="GallerySlide_0" class="app-catalog-1igv0r1 e19l9blg0 is-selected"><img src={data.imageUrl} alt={data.title}
                                                                    loading="eager" width="100%" height="100%" class="ekkbt9g0 app-catalog-15kpwh2 e1fcwjnh0"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="fresnel-container fresnel-lessThan-tabletP "></div>
                                            </div>
                                            <div class="app-catalog-7mrt22 e1tlgox20">
                                                <div class="fresnel-container fresnel-greaterThan-tabletP "></div>
                                                <div class="fresnel-container fresnel-lessThan-tabletL "></div>
                                            </div>
                                        </div>
                                        <div class="fresnel-container fresnel-greaterThan-mobileL ">
                                            <div class="e3w173w0 app-catalog-i9v33e e3tyxgd0" data-meta-name=""></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fresnel-container fresnel-lessThan-tabletP "></div>
                            <div class="fresnel-container fresnel-lessThan-tabletP "></div>
                            <div class="fresnel-container fresnel-lessThan-tabletL "></div>
                        </div>
                        <div class="fresnel-container fresnel-greaterThan-mobileL ">
                            <div data-meta-name="ProductHeaderContentLayout__second-column" class="app-catalog-qhusmh eme04gi0">
                                <div class="fresnel-container fresnel-greaterThan-tabletP ">
                                    <div class="app-catalog-0 e1re7ty40">
                                        <ul class="app-catalog-omvud7 eetknoe3">
                                            <li class="app-catalog-f3ulnv eetknoe2"><span class="app-catalog-lquems eetknoe1">Ядро:</span> <span class="app-catalog-kwpt08 eetknoe0">Alder Lake;</span></li>
                                            <li class="app-catalog-f3ulnv eetknoe2"><span class="app-catalog-lquems eetknoe1">Частота:</span> <span class="app-catalog-kwpt08 eetknoe0">2.5 ГГц и 4.4 в режиме Turbo;</span></li>
                                            <li class="app-catalog-f3ulnv eetknoe2"><span class="app-catalog-lquems eetknoe1">Сокет:</span> <span class="app-catalog-kwpt08 eetknoe0">LGA 1700;</span></li>
                                            <li class="app-catalog-f3ulnv eetknoe2"><span class="app-catalog-lquems eetknoe1">Число ядер:</span> <span class="app-catalog-kwpt08 eetknoe0">6, потоков 12;</span></li>
                                            <li class="app-catalog-f3ulnv eetknoe2"><span class="app-catalog-lquems eetknoe1">Тепловыделение:</span> <span class="app-catalog-kwpt08 eetknoe0">65 Вт;</span></li>
                                            <li class="app-catalog-f3ulnv eetknoe2"><span class="app-catalog-lquems eetknoe1">Техпроцесс:</span> <span class="app-catalog-kwpt08 eetknoe0">10 нм;</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="fresnel-container fresnel-lessThan-tabletL "></div>
                            </div>
                        </div>
                        <div class="fresnel-container fresnel-greaterThan-tabletP ">
                            <div data-meta-name="ProductHeaderContentLayout__third-column" class="app-catalog-qhusmh eme04gi0">
                                <div class="app-catalog-0 e33gsaq0">
                                    <div class="e13ri1pq0 app-catalog-kjjdo6 e1pr7ieb0" data-meta-name="PriceBlock">
                                        <div data-meta-name="PriceBlock__price" class="app-catalog-0 e1xrzi9t0"><span class="e10p9yfm0 e2bu0ii0 e106ikdt0 app-catalog-1sf0rs0 e1gjr6xo0" data-meta-name="" color="None"><span data-meta-is-total="notTotal" data-meta-price="13 890" class="app-catalog-0 eb8dq160"><span class="e1j9birj0 e106ikdt0 app-catalog-8hy98m e1gjr6xo0" color="None">13 890</span>
                                            <span class="app-catalog-1xgjkxr eof3cbk0">₽</span>
                                            </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="app-catalog-0 eyh2s6l0"></div>
                                <div class="app-catalog-0 e1bka33c0">
                                    <div class="app-catalog-14fygjj e1mwo0rv0">
                                        <div class="app-catalog-1i6j8t0 elgcxfy0">
                                            <div class="app-catalog-19w7a63 e113xh920">
                                                <div data-checkout-button="true" class="app-catalog-zg5qvs e17quee80"><button class="e11w80q30 e4uhfkv0 app-catalog-zkoen2 e4mggex0" data-meta-name="BasketDesktopButton" data-meta-disabled="false" type="button" title=""><span class="app-catalog-1xdhyk6 e1hf2t4f0"><span class="e1pbr73b0 app-catalog-bh6qcy e1dsa0940"><span class="e1fsc6a40 app-catalog-6po9t6 e14kw8wi0"><svg viewBox="0 0 20 20"><use href="#cart_add"></use></svg></span><span class="app-catalog-19y4hmw e1fnp08x0">В корзину</span></span></span></button></div>
                                            </div>
                                            <div class="app-catalog-1vphnpr eoxh2f70"><button class="e13060xl0 e4uhfkv0 app-catalog-4qc1vl e4mggex0" data-meta-name="" data-meta-disabled="false" type="button" title=""><span class="app-catalog-1xdhyk6 e1hf2t4f0"><span class="e1pbr73b0 app-catalog-bh6qcy e1dsa0940"><span class="e1fsc6a40 app-catalog-6po9t6 e14kw8wi0"><svg viewBox="0 0 20 20"><use href="#cart_add"></use></svg></span><span class="app-catalog-19y4hmw e1fnp08x0">Купить как Юр.Лицо</span></span></span></button></div>
                                        </div>
                                    </div>
                                </div>
                                <div data-meta-name="ThirdColumnLayout__promo-blocks" class="app-catalog-y4wt3n e1u6ajfg0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default PowerunitComponent