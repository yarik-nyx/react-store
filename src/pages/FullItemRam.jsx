import React, {useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
import '../scss/components/_full-item.scss'
import SkeletonFullItem from './SkeletonFullItem';


const FullItem = () => {
    
    const dispatch = useDispatch()

    let [count, setCount] = useState(0)

    const onClickAdd = () => {
        setCount(++count)
        let item = {
            id:data.id,
            title:data.title,
            price:data.price,
            imageurl:data.imageurl,

        }

        dispatch(addItem(item))
    }


    const [isLoading, setLoading] = React.useState(true)

    const [data, setData] = React.useState()

    const {id} = useParams()

    const navigate = useNavigate()

    const fetchComponent = async () => {
        try {
            setLoading(true)
            const {data} = await axios.get(`http://localhost:5555/Rams/${id}`)
            setData(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            alert('Компонент не найден')
            navigate('/')
        }
        
    }

    React.useEffect(() => {
        fetchComponent()
    }, [])


    return (
        <>
        { isLoading ? <><SkeletonFullItem></SkeletonFullItem></> :
            <div class="e19lhdq00 app-catalog-1sbr2xg e164boj10" data-meta-name="">
            <div data-meta-name="ProductHeaderLayout" class="app-catalog-1xdhyk6 e19nkc9p0">
                <div class="app-catalog-64xkav eyocz9l0"></div>
                <div data-meta-name="ProductHeaderLayout__title" class="app-catalog-3z12b7 eotjnw00">
                    <h1 class="e1ubbx7u0 eml1k9j0 app-catalog-lc5se5 e1gjr6xo0" color="Main">Ram {data.title}</h1>
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
                                                            <div data-meta-id="GallerySlide_0" class="app-catalog-1igv0r1 e19l9blg0 is-selected"><img src={data.imageurl} alt={data.title}
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
                                            <li class="app-catalog-f3ulnv eetknoe2"><span class="app-catalog-lquems eetknoe1">Тип памяти:</span> <span class="app-catalog-kwpt08 eetknoe0">{data.type_ram.type_ram};</span></li>
                                            <li class="app-catalog-f3ulnv eetknoe2"><span class="app-catalog-lquems eetknoe1">Объем памяти:</span> <span class="app-catalog-kwpt08 eetknoe0">{data.volume} ГБ;</span></li>
                                            <li class="app-catalog-f3ulnv eetknoe2"><span class="app-catalog-lquems eetknoe1">Частота памяти:</span> <span class="app-catalog-kwpt08 eetknoe0">{data.frequency} МГц;</span></li>
                                            <li class="app-catalog-f3ulnv eetknoe2"><span class="app-catalog-lquems eetknoe1">Напряжение:</span> <span class="app-catalog-kwpt08 eetknoe0">{data.voltage}В;</span></li>
                                            <li class="app-catalog-f3ulnv eetknoe2"><span class="app-catalog-lquems eetknoe1">Задержка:</span> <span class="app-catalog-kwpt08 eetknoe0">{data.timings};</span></li>
                                            <li class="app-catalog-f3ulnv eetknoe2"><span class="app-catalog-lquems eetknoe1">Латентность (CAS):</span> <span class="app-catalog-kwpt08 eetknoe0">{data.cas};</span></li>

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
                                        <div data-meta-name="PriceBlock__price" class="app-catalog-0 e1xrzi9t0"><span class="e10p9yfm0 e2bu0ii0 e106ikdt0 app-catalog-1sf0rs0 e1gjr6xo0" data-meta-name="" color="None"><span data-meta-is-total="notTotal" data-meta-price="13 890" class="app-catalog-0 eb8dq160"><span class="e1j9birj0 e106ikdt0 app-catalog-8hy98m e1gjr6xo0" color="None">{data.price}</span>
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
                                            <button className="button button--outline button--add" onClick={onClickAdd}>
                                                <svg
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                                    fill="white"
                                                    />
                                                </svg>
                                                <span>Добавить</span>
                                                {count > 0 && <i>{count}</i>}
                                            </button>
                                            </div>
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
        }
    </>
    )
}

export default FullItem