import React from 'react'
import axios from 'axios'
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { useForm } from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import '../scss/components/_order.scss'


import { AddressContext } from '../App'

import Map from '../components/Map/index'

const Order = () => {

    const navigate = useNavigate()

    const {items, totalPrice} = useSelector((state) => state.cartReducer)

    const {register, handleSubmit, setError, formState: {errors}} = useForm({
    defaultValues:{
        tel: "",
        email: ""
    },
    mode: 'onChange'
    })

  const onSubmit = async (values) => {

    const reg = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");
   if(!reg.test(values.tel)){
        alert('Неправильный номер телефона')
        return
   }

    if(!addressValue){
        alert('Не выбран адрес')
        return
    }

    const json = {
        phone:values.tel,
        email:values.email,
        address:addressValue,
        items: items,
        totalPrice

    }

    try {
        const res = await axios.post("http://localhost:5555/Mail", {
            email:values.email,
            address:addressValue,
            items
        })
        console.log("res", res);
    } catch (error) {
        console.log("err", error);
    }



      window.localStorage.setItem('order', JSON.stringify(json))
      navigate(`/Purchase`);
  }




    const {addressValue} = React.useContext(AddressContext)

    return (
    <Paper>
        <form onSubmit={handleSubmit(onSubmit)}>
             <div class="checkout-container_qiQ">
                <div class="checkout-container__steps_YKW">
                    <div class="checkout-client">
                        <div class="base-step-label_su9 checkout-client__step-label_Kxi">
                            <div class="base-step-label__number_xmR">1</div> Данные покупателя</div>
                                <div class="base-step-left-line_QiU">
                                    <div class="checkout-client__type-toggle_L1m">    
                                    </div>
                                    <div class="base-checkout-client-individual_mDd checkout-client__individual_doz">
                                        <div class='form'>
                                            <TextField
                                                className="field"
                                                label="Phone"
                                                error={Boolean(errors.tel?.message)}
                                                helperText={errors.tel?.message}
                                                type='text'                                               
                                                inputProps={{maxLength:12}}
                                                {...register('tel', {required: 'Укажите телефон', })}
                                                
                                                />
                                            
                                            <TextField 
                                                className="field"
                                                label="E-mail" 
                                                error={Boolean(errors.email?.message)}
                                                helperText={errors.email?.message}
                                                type='email'
                                                {...register('email', {required: 'Укажите почту'})}
                                                    
                                                />  
                                        </div>
                    
                                    </div>  
            </div>
        </div>
        <div>
        <div class="checkout-getting" data-gtm-vis-recent-on-screen32166084_2520="156" data-gtm-vis-first-on-screen32166084_2520="156" data-gtm-vis-total-visible-time32166084_2520="100" data-gtm-vis-has-fired32166084_2520="1">
            <div class="base-step-label_su9 checkout-getting__step-label_dwt">
                <div class="base-step-label__number_xmR">2</div> Пункт выдачи</div>
            <div class="checkout-getting__city-info_hRW"></div>
            <div class="base-step-left-line_QiU">
                <div class="checkout-getting__pickup_HA7">
                    <div class="base-checkout-getting-pickup__wrapper_DQB">
                        <div class="base-checkout-getting-pickup__wrapper-map_UJ9">
                            <Map></Map>
                            </div>    
                        </div>   
                        {
                            addressValue !== "" && (
                                <div class="base-checkout-getting-pickup__wrapper-address_nFt">
                                    <p class="base-checkout-getting-pickup__address_mzJ" target="_self">{addressValue}</p> 
                                </div>  
                            )
                        }

                </div>    
            </div>
            </div>   
                    <div class="checkout-container__apply_BrK">
                        <button class="button pay-btn" type="submit" size="large" variant="contained" fullWidth>
                                <span>Оформить</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</Paper>  
    )
}


export default Order