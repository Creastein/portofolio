"use client";

import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function AboutSection() {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content-wrapper fade-in stagger-2">
                        <div className="section-header text-left">
                            <h2>ABOUT ME</h2>
                        </div>
                        <div className="about-text">
                            <p className="lead">I'm a Business Analyst with a background in Information Systems.</p>
                            <p>I focus on translating business needs into clear, structured solutions.</p>
                            <p>With hands-on frontend experience, I'm able to validate ideas quickly, communicate effectively with developers, and ensure solutions stay aligned with user and business goals.</p>

                            <div className="about-actions mt-4">
                                <a href="#works" className="btn btn-accent">SEE MY WORK</a>
                                <a href="https://drive.google.com/file/d/1xRCIwlYaiQf54mUorn8-TAfmTBL_MXBq/view?usp=sharing" target="_blank" className="btn btn-glitch" data-text="CHECK MY CV">CHECK MY CV</a>
                            </div>
                        </div>
                    </div>
                    <div className="about-image fade-in stagger-1">
                        <div className="image-overlay-gradient"></div>
                        <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}>
                            <Image
                                src={`${basePath}/images/about-me.png`}
                                alt="WELLI - Business Analyst and Developer Portrait"
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="about-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
