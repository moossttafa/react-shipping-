import React from 'react'
import imgAbout from '../img/unnamed.jpg'

function AboutSection() {
    return (
        <div className="about-one " id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="about-box-img">
                        <div className="box-img">
                            <img src={imgAbout} alt="pic" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-box-text">
                        <div className="sec-title sec-left">
                            <div className="sec-title-headline">
                                <h2 className="top-handline-title">لماذا نحن </h2>
                                <h3 className="handline-title">تقديم افضل حلول</h3>
                            </div>
                        </div>
                        <p className="about-text"> تأسست الشركه عام 2010 في مصر وباتت شركه شحن مميزة فى ولدينا الان اكثر من
                            10 مكاتب فى محافظات مختلفة وفرعنا الرئيسي فى العاصمة القاهرة وتقدم الشركة خدمة نقل البضائع
                            والمتعلقات الشخصية من محافظة الي اخري بسرعة أمان باستخدام اسطول كبير من سياراتنا ودرجاتنا
                            البخارية الذين يمتلكون الكفأة والامانة ونقدم خدمات نقل المتعلقات الشخصية - والبضائع -
                            والاوراق - وتوصيل الهداية
                         </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AboutSection
