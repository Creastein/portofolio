"use client";

import { frontendSkills, analysisItems, multimediaSkills, officeSkills } from '../data/skillsData';

export default function SkillsSection() {
    return (
        <section id="skills" className="section skills-section bg-light">
            <div className="container">
                <div className="section-header fade-in">
                    <h2>My Skills</h2>
                    <div className="skills-grid">
                        {/* Frontend Development (Large Card) */}
                        <div className="skill-card frontend fade-in stagger-1">
                            <div className="skill-header">
                                <i className="fas fa-code accent-icon"></i>
                                <h3>Frontend Development</h3>
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
                                <h3>Business & System Analysis</h3>
                            </div>
                            <div className="analysis-list">
                                {analysisItems.map((item, index) => (
                                    <div key={index} className="analysis-item">
                                        <i className={`fas ${item.icon}`}></i>
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Multimedia (Medium Card) */}
                        <div className="skill-card multimedia fade-in stagger-3">
                            <div className="skill-header">
                                <i className="fas fa-photo-video accent-icon"></i>
                                <h3>Multimedia</h3>
                            </div>
                            <div className="skills-tiles-grid">
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
                                <h3>Office Tools</h3>
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
