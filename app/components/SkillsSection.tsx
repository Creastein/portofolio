"use client";

import { frontendSkills, analysisItems, multimediaSkills, officeSkills } from '../data/skillsData';
import { useLanguage } from '../context/LanguageContext';

export default function SkillsSection() {
    const { t } = useLanguage();

    return (
        <section id="skills" className="section skills-section bg-light">
            <div className="container">
                <div className="section-header fade-in">
                    <h2>{t.skills.title}</h2>
                    <div className="skills-grid">
                        {/* Frontend Development (Large Card) */}
                        <div className="skill-card frontend fade-in stagger-1">
                            <div className="skill-header">
                                <i className="fas fa-code accent-icon"></i>
                                <h3>{t.skills.frontend}</h3>
                            </div>
                            <div className="skills-tiles-grid">
                                {frontendSkills.map((skill, index) => (
                                    <div key={index} className="skill-tile" title={skill.name}>
                                        <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Business Analysis (Wide Card) */}
                        <div className="skill-card analysis fade-in stagger-2">
                            <div className="skill-header">
                                <i className="fas fa-chart-line accent-icon"></i>
                                <h3>{t.skills.analysis}</h3>
                            </div>
                            <div className="analysis-list">
                                {/* Manually mapping to match translation keys if needed or rely on static array + translation lookup? 
                                    Better approach: Use the data structure from existing file but map the LABEL to translation if possible.
                                    However, the existing data file has hardcoded strings.
                                    Alternative: Use keys from the translation file and iterate over them.
                                */}
                                <div className="analysis-item">
                                    <i className="fas fa-search"></i>
                                    <span>{t.skills.analysisItems.req}</span>
                                </div>
                                <div className="analysis-item">
                                    <i className="fas fa-share-alt"></i>
                                    <span>{t.skills.analysisItems.flow}</span>
                                </div>
                                <div className="analysis-item">
                                    <i className="fas fa-database"></i>
                                    <span>{t.skills.analysisItems.erd}</span>
                                </div>
                                <div className="analysis-item">
                                    <i className="fas fa-file-alt"></i>
                                    <span>{t.skills.analysisItems.doc}</span>
                                </div>
                            </div>
                        </div>

                        {/* Multimedia (Medium Card) */}
                        <div className="skill-card multimedia fade-in stagger-3">
                            <div className="skill-header">
                                <i className="fas fa-photo-video accent-icon"></i>
                                <h3>{t.skills.multimedia}</h3>
                            </div>
                            <div className="skills-tiles-grid">
                                {/* ... kept same logic for images ... */}
                                {/* For brevity, copying logic */}
                                {multimediaSkills.map((skill, index) => (
                                    <div key={index} className="skill-tile" title={skill.name}>
                                        <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Office (Medium Card) */}
                        <div className="skill-card office fade-in stagger-4">
                            <div className="skill-header">
                                <i className="fas fa-briefcase accent-icon"></i>
                                <h3>{t.skills.office}</h3>
                            </div>
                            <div className="skills-tiles-grid">
                                {officeSkills.map((skill, index) => (
                                    <div key={index} className="skill-tile" title={skill.name}>
                                        <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
