"use client";

import { frontendSkills, analysisItems, multimediaSkills, officeSkills } from '../data/skillsData';
import { useLanguage } from '../context/LanguageContext';

const SkillTile = ({ name, icon }: { name: string; icon: string }) => (
    <div
        className="skill-tile"
        title={name}
        role="img"
        aria-label={name}
        tabIndex={0}
    >
        <img src={icon} alt="" aria-hidden="true" className="skill-icon-img" />
    </div>
);

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
                                    <SkillTile key={index} name={skill.name} icon={skill.icon} />
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
                                {multimediaSkills.map((skill, index) => (
                                    <SkillTile key={index} name={skill.name} icon={skill.icon} />
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
                                    <SkillTile key={index} name={skill.name} icon={skill.icon} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
