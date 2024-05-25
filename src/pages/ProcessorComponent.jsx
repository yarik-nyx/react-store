import React from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

import './ProcessorComponent.scss'


const ProcessorComponent = () => {

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
        <div id="DIV_1">
        <div id="DIV_2">
            <div id="DIV_3">
            </div>
            <div id="DIV_4">
                <h1 id="H1_5">
                    Процессор Intel Core i5 12400F, LGA 1700, OEM [cm8071504650609 srl5z]
                </h1>
            </div>
            <div id="DIV_6">
                <div id="DIV_7">
                    <div id="DIV_8">
                        <div id="DIV_9">
                            <span id="SPAN_10"></span>
                            <svg id="svg_12" height="18" width="18" xmlns="http://www.w3.org/2000/svg"  
                                    viewBox="0 0 47.94 47.94">
                                    <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                                        C22.602,0.567,25.338,0.567,26.285,2.486z"/>
                                </svg>
                                <span>{data.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="DIV_15">
                <div id="DIV_16">
                    <div id="DIV_17">
                        <div id="DIV_18">
                        </div>
                        <div id="DIV_19">
                            <div id="DIV_20">
                                <div id="DIV_21">
                                    <div id="DIV_22">
                                        <div id="DIV_23">
                                            <div id="DIV_24">
                                                <div id="DIV_25">
                                                    <div id="DIV_26">
                                                        <div id="DIV_27">
                                                            <img src={data.imageUrl} width="100%" height="100%" id="IMG_28" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="DIV_29">
                                            </div>
                                        </div>
                                        <div id="DIV_30">
                                            <div id="DIV_31">
                                            </div>
                                            <div id="DIV_32">
                                            </div>
                                        </div>
                                    </div>
                                    <div id="DIV_33">
                                        <div id="DIV_34">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="DIV_35">
                        </div>
                        <div id="DIV_36">
                        </div>
                        <div id="DIV_37">
                        </div>
                    </div>
                    <div id="DIV_38">
                        <div id="DIV_39">
                            <div id="DIV_40">
                                <div id="DIV_41">
                                    <ul id="UL_42">
                                        <li id="LI_43">
                                            <span id="SPAN_44">Ядро:</span>
                                             <span id="SPAN_45">Alder Lake;</span>
                    
    
                                        </li>
                                        <li id="LI_46">
                                            <span id="SPAN_47">Частота:</span> 
                                            <span id="SPAN_48">2.5 ГГц и 4.4 в режиме Turbo;</span>
                                        </li>
                                        <li id="LI_49">
                                            <span id="SPAN_50">Сокет:</span> 
                                            <span id="SPAN_51">LGA 1700;</span>
                                        </li>
                                        <li id="LI_52">
                                            <span id="SPAN_53">Число ядер:</span>
                                             <span id="SPAN_54">6, потоков 12;</span>
                                        </li>
                                        <li id="LI_55">
                                            <span id="SPAN_56">Тепловыделение:</span> 
                                            <span id="SPAN_57">65 Вт;</span>
                                        </li>
                                        <li id="LI_58">
                                            <span id="SPAN_59">Техпроцесс:</span> 
                                            <span id="SPAN_60">10 нм;</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="DIV_61">
                            </div>
                        </div>
                    </div>
                    <div id="DIV_62">
                        <div id="DIV_63">
                            <div id="DIV_64">
                                <div id="DIV_65">
                                    <div id="DIV_66">
                                        <span id="SPAN_67"><span id="SPAN_68"><span id="SPAN_69">13 890</span><span id="SPAN_70">₽</span></span></span>
                                    </div>
                                </div>
                            </div>
                            <div id="DIV_71">
                            </div>
                            <div id="DIV_72">
                                <div id="DIV_73">
                                    <div id="DIV_74">
                                        <div id="DIV_75">
                                            <div id="DIV_76">
                                                <button type="button" id="BUTTON_77">
                                                    <span id="SPAN_78"><span id="SPAN_79"><span id="SPAN_80"></span></span></span>
                                                </button>
                                                <svg id="svg_81">
                                                    <use id="use_82">
                                                    </use>
                                                </svg><span id="SPAN_83">В корзину</span>
                                            </div>
                                        </div>
                                        <div id="DIV_84">
                                            <button type="button" id="BUTTON_85">
                                                <span id="SPAN_86"><span id="SPAN_87"><span id="SPAN_88"></span></span></span>
                                            </button>
                                            <svg id="svg_89">
                                                <use id="use_90">
                                                </use>
                                            </svg><span id="SPAN_91">Купить как Юр.Лицо</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="DIV_92">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>        
    )
}

export default ProcessorComponent