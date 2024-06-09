import React from 'react'

import '../scss/components/_order.scss'


import { AddressContext } from '../App'

import Map from '../components/Map/index'

const Order = () => {
    
    const {addressValue} = React.useContext(AddressContext)
    
    return (
<div class="checkout-container_qiQ">
        <div class="checkout-container__steps_YKW">
        <div class="checkout-client">
            <div class="base-step-label_su9 checkout-client__step-label_Kxi">
                <div class="base-step-label__number_xmR">1</div> Данные покупателя</div>
            <div class="base-step-left-line_QiU">
                <div class="checkout-client__type-toggle_L1m">    
                </div>
                <div class="base-checkout-client-individual_mDd checkout-client__individual_doz">
                    <div class="base-checkout-client-individual__input-row-container_Y0C">
                        <div class="base-input-phone-confirm-check_Xeh base-checkout-client-individual__input-row_PPL">
                            <div class="base-input-row-validation_Vha">
                                <div class="base-ui-input-row_uxh base-ui-input-row_filled_DoF"><label class="base-ui-input-row__label_JAu" for="ir-2cjqr">Телефон</label>
                                    <div class="base-ui-input-row__input-container_m9W"><span class="base-ui-input-row__mask-placeholder_cGf"><span>+7 000 000-00-00</span></span>
                                        <input class="base-ui-input-row__input_Gc5" id="ir-2cjqr" type="tel" maxlength="16" placeholder=""/>
                                        
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div class="base-input-row-validation_Vha base-checkout-client-individual__input-row_PPL">
                            <div class="base-ui-input-row_uxh base-ui-input-row_filled_DoF" ><label class="base-ui-input-row__label_JAu" for="ir-xrtv7">E-mail (необязательно)</label>
                                <div class="base-ui-input-row__input-container_m9W">
                                    
                                    <input class="base-ui-input-row__input_Gc5" id="ir-xrtv7" type="text" maxlength="50"/>
                                    
                                </div>
                                
                            </div>
                        </div>
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
                <div class="button pay-btn">
                    <span>Оформить</span>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}


export default Order