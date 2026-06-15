document.addEventListener('DOMContentLoaded', () => {
    // Input Elements
    const answer1Input = document.getElementById('answer1');
    const submit1Btn = document.getElementById('submit1');
    const feedback1Container = document.getElementById('feedback1');

    // UI Elements
    const titleSection = document.querySelector('.title-section');
    const mainTitle = document.querySelector('.main-title');
    const scrollIndicatorDown = document.querySelector('.title-section .scroll-indicator');
    const reportLink = document.getElementById('report-link');

    const step1Section = document.getElementById('step1');
    const step1Card = step1Section.querySelector('.step-card');
    const unlockStep2Indicator = document.getElementById('unlock-step2');

    const step2Section = document.getElementById('step2');
    const step2Card = step2Section.querySelector('.step-card');
    const unlockStep3Indicator = document.getElementById('unlock-step3');

    const answer2Input = document.getElementById('answer2');
    const submit2Btn = document.getElementById('submit2');
    const feedback2Container = document.getElementById('feedback2');

    const step3Section = document.getElementById('step3');
    const step3Card = step3Section.querySelector('.step-card');

    const answer3_1Input = document.getElementById('answer3_1');
    const answer3_2Input = document.getElementById('answer3_2');
    const submit3Btn = document.getElementById('submit3');
    const feedback3Container = document.getElementById('feedback3');
    
    const unlockStep4Indicator = document.getElementById('unlock-step4');
    const step4Section = document.getElementById('step4');
    const step4Card = step4Section.querySelector('.step-card');
    
    const answer4Input = document.getElementById('answer4');
    const submit4Btn = document.getElementById('submit4');
    const feedback4Container = document.getElementById('feedback4');

    const unlockStep5Indicator = document.getElementById('unlock-step5');
    const lastStepSection = document.getElementById('last-step');
    const lastStepCard = lastStepSection.querySelector('.step-card');

    const answer5Input = document.getElementById('answer5');
    const submit5Btn = document.getElementById('submit5');
    const feedback5Container = document.getElementById('feedback5');

    const unlockClearIndicator = document.getElementById('unlock-clear');
    const clearSection = document.getElementById('clear-section');
    const clearCard = clearSection ? clearSection.querySelector('.step-card') : null;

    let step2Unlocked = false;
    let step1Cleared = false;
    let step2UnlockedTime = 0;

    let step3Unlocked = false;
    let step2Cleared = false;
    let step3UnlockedTime = 0;

    let step4Unlocked = false;
    let step4Cleared = false;
    let step4UnlockedTime = 0;

    let lastStepUnlocked = false;
    let lastStepCleared = false;
    let lastStepUnlockedTime = 0;

    let clearUnlocked = false;
    let clearUnlockedTime = 0;

    // Scroll configuration
    const fadeDistance = 600; // フェードにかかるスクロール距離
    const gapDistance = 800;  // 完全に真っ白になる「間」のスクロール距離（ここを増やすと間が長くなります）
    const phase1Scroll = fadeDistance + gapDistance + fadeDistance;
    const moveDistance = 350;

    let maxScroll = phase1Scroll;

    function updateBodyHeight() {
        // Set body height to allow native scrolling
        document.body.style.height = `${maxScroll + window.innerHeight}px`;
    }
    updateBodyHeight();

    // Smooth scroll for indicators
    scrollIndicatorDown.addEventListener('click', () => {
        window.scrollTo({ top: phase1Scroll, behavior: 'smooth' });
    });

    if (unlockStep2Indicator) {
        unlockStep2Indicator.addEventListener('click', () => {
            window.scrollTo({ top: phase1Scroll * 2, behavior: 'smooth' });
        });
    }

    if (unlockStep3Indicator) {
        unlockStep3Indicator.addEventListener('click', () => {
            window.scrollTo({ top: phase1Scroll * 3, behavior: 'smooth' });
        });
    }

    if (unlockStep4Indicator) {
        unlockStep4Indicator.addEventListener('click', () => {
            window.scrollTo({ top: phase1Scroll * 4, behavior: 'smooth' });
        });
    }

    if (unlockStep5Indicator) {
        unlockStep5Indicator.addEventListener('click', () => {
            window.scrollTo({ top: phase1Scroll * 5, behavior: 'smooth' });
        });
    }

    if (unlockClearIndicator) {
        unlockClearIndicator.addEventListener('click', () => {
            window.scrollTo({ top: phase1Scroll * 6, behavior: 'smooth' });
        });
    }

    // Function to check answer 1
    const checkAnswer1 = () => {
        if (step1Cleared) return;

        const answer = answer1Input.value.trim();

        if (answer === 'イラスト' || answer === 'いらすと') {
            step1Cleared = true;
            handleSuccess1();
        } else if (answer !== '') {
            // Shake effect
            answer1Input.style.animation = 'none';
            void answer1Input.offsetWidth;
            answer1Input.style.animation = 'shake 0.5s';
        }
    };

    const handleSuccess1 = () => {
        inputSuccessStyle(answer1Input);
        answer1Input.disabled = true;
        submit1Btn.disabled = true;

        // 答えが判定されてから一瞬後（600ms後）にメッセージを表示する
        setTimeout(() => {
            feedback1Container.innerHTML = `
                <div class="success-message">
                    <p class="success-text" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.8rem;">正解！</p>
                    <p class="success-text" style="line-height: 1.6;">
                        ダイヤル錠の番号は123<br>
                        天井をあけ、封筒1をひらこう
                    </p>
                </div>
            `;
        }, 600);

        // メッセージが出てからさらに一瞬後（計1200ms後）にNEXT STEP矢印を出す
        setTimeout(() => {
            step2Unlocked = true;
            step2UnlockedTime = Date.now();

            // Extend page height to allow scrolling to Step 2
            maxScroll = phase1Scroll * 2;
            updateBodyHeight();
        }, 1200);
    };

    submit1Btn.addEventListener('click', checkAnswer1);
    answer1Input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkAnswer1();
        }
    });

    // Function to check answer 2
    const checkAnswer2 = () => {
        if (step2Cleared) return;

        const answer = answer2Input.value.trim();

        if (answer === 'クエスト' || answer === 'くえすと') {
            step2Cleared = true;
            handleSuccess2();
        } else if (answer !== '') {
            // Shake effect
            answer2Input.style.animation = 'none';
            void answer2Input.offsetWidth;
            answer2Input.style.animation = 'shake 0.5s';
        }
    };

    const handleSuccess2 = () => {
        inputSuccessStyle(answer2Input);
        answer2Input.disabled = true;
        submit2Btn.disabled = true;

        setTimeout(() => {
            feedback2Container.innerHTML = `
                <div class="success-message">
                    <p class="success-text" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.8rem;">正解！</p>
                    <p class="success-text" style="line-height: 1.6;">
                        使ったアイテムは元の場所に戻そう
                    </p>
                </div>
            `;
        }, 600);

        setTimeout(() => {
            step3Unlocked = true;
            step3UnlockedTime = Date.now();

            maxScroll = phase1Scroll * 3;
            updateBodyHeight();
        }, 1200);
    };

    submit2Btn.addEventListener('click', checkAnswer2);
    answer2Input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkAnswer2();
        }
    });

    // Function to check answer 3
    let step3Cleared = false;
    const checkAnswer3 = () => {
        if (step3Cleared) return;

        const ans1 = answer3_1Input.value.trim();
        const ans2 = answer3_2Input.value.trim();

        // 判定ロジック（順不同でもOKとする）
        const isOndoku = (val) => ['おんどく', 'オンドク', '音読'].includes(val);
        const isChiritori = (val) => ['ちりとり', 'チリトリ'].includes(val);

        const correct = (isOndoku(ans1) && isChiritori(ans2)) || (isChiritori(ans1) && isOndoku(ans2));

        if (correct) {
            step3Cleared = true;
            handleSuccess3();
        } else {
            // Shake effect for wrong/empty inputs
            if (ans1 !== '' && !(isOndoku(ans1) || isChiritori(ans1))) {
                answer3_1Input.style.animation = 'none';
                void answer3_1Input.offsetWidth;
                answer3_1Input.style.animation = 'shake 0.5s';
            }
            if (ans2 !== '' && !(isOndoku(ans2) || isChiritori(ans2))) {
                answer3_2Input.style.animation = 'none';
                void answer3_2Input.offsetWidth;
                answer3_2Input.style.animation = 'shake 0.5s';
            }
            // Shake both if both empty when submitted
            if (ans1 === '' && ans2 === '') {
                answer3_1Input.style.animation = 'none';
                void answer3_1Input.offsetWidth;
                answer3_1Input.style.animation = 'shake 0.5s';
                
                answer3_2Input.style.animation = 'none';
                void answer3_2Input.offsetWidth;
                answer3_2Input.style.animation = 'shake 0.5s';
            }
        }
    };

    const handleSuccess3 = () => {
        inputSuccessStyle(answer3_1Input);
        inputSuccessStyle(answer3_2Input);
        answer3_1Input.disabled = true;
        answer3_2Input.disabled = true;
        submit3Btn.disabled = true;

        setTimeout(() => {
            feedback3Container.innerHTML = `
                <div class="success-message">
                    <p class="success-text" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.8rem;">正解！</p>
                    <p class="success-text" style="line-height: 1.6;">
                        見えないところを見よう
                    </p>
                </div>
            `;
        }, 600);
        
        setTimeout(() => {
            step4Unlocked = true;
            step4UnlockedTime = Date.now();
            
            maxScroll = phase1Scroll * 4;
            updateBodyHeight();
        }, 1200);
    };

    submit3Btn.addEventListener('click', checkAnswer3);
    answer3_1Input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkAnswer3();
    });
    answer3_2Input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkAnswer3();
    });

    // Function to check answer 4
    const checkAnswer4 = () => {
        if (step4Cleared) return;

        const answer = answer4Input.value.trim();

        if (answer === 'さいご' || answer === '最後' || answer === 'サイゴ') {
            step4Cleared = true;
            handleSuccess4();
        } else if (answer !== '') {
            // Shake effect
            answer4Input.style.animation = 'none';
            void answer4Input.offsetWidth;
            answer4Input.style.animation = 'shake 0.5s';
        }
    };

    const handleSuccess4 = () => {
        inputSuccessStyle(answer4Input);
        answer4Input.disabled = true;
        submit4Btn.disabled = true;

        setTimeout(() => {
            feedback4Container.innerHTML = `
                <div class="success-message">
                    <p class="success-text" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.8rem;">正解！</p>
                    <p class="success-text" style="line-height: 1.6;">
                        封筒2をひらこう
                    </p>
                </div>
            `;
        }, 600);

        setTimeout(() => {
            lastStepUnlocked = true;
            lastStepUnlockedTime = Date.now();

            maxScroll = phase1Scroll * 5;
            updateBodyHeight();
        }, 1200);
    };

    submit4Btn.addEventListener('click', checkAnswer4);
    answer4Input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkAnswer4();
        }
    });

    // Function to check answer 5
    const checkAnswer5 = () => {
        if (lastStepCleared) return;

        const answer = answer5Input.value.trim();

        if (answer === 'カメラ' || answer === 'かめら') {
            lastStepCleared = true;
            handleSuccess5();
        } else if (answer !== '') {
            // Shake effect
            answer5Input.style.animation = 'none';
            void answer5Input.offsetWidth;
            answer5Input.style.animation = 'shake 0.5s';
        }
    };

    const handleSuccess5 = () => {
        inputSuccessStyle(answer5Input);
        answer5Input.disabled = true;
        submit5Btn.disabled = true;

        setTimeout(() => {
            feedback5Container.innerHTML = `
                <div class="success-message">
                    <p class="success-text" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.8rem;">正解！</p>
                    <p class="success-text" style="line-height: 1.6;">
                        おめでとう！全ての謎を解き明かした！
                    </p>
                </div>
            `;
        }, 600);

        setTimeout(() => {
            clearUnlocked = true;
            clearUnlockedTime = Date.now();

            maxScroll = phase1Scroll * 6;
            updateBodyHeight();
        }, 1200);
    };

    submit5Btn.addEventListener('click', checkAnswer5);
    answer5Input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkAnswer5();
        }
    });

    function inputSuccessStyle(inputEl) {
        inputEl.style.borderColor = '#4CAF50';
        inputEl.style.color = '#4CAF50';
        const submitBtn = inputEl.parentElement.querySelector('.submit-btn');
        if (submitBtn) {
            submitBtn.style.color = '#4CAF50';
        }
    }

    // Add CSS for shake animation dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
        }
    `;
    document.head.appendChild(style);

    // Main GSAP-style Scroll Render Loop
    function render() {
        const s = window.scrollY;

        // --- 1. Title Section ---
        let titleOpacity = 1 - (s / fadeDistance);
        titleOpacity = Math.max(0, Math.min(1, titleOpacity));

        mainTitle.style.opacity = titleOpacity;

        // Move title dynamically based on moveDistance
        let titleY = (s / fadeDistance) * -moveDistance;
        mainTitle.style.transform = `translateY(${titleY}px)`;

        scrollIndicatorDown.style.opacity = titleOpacity; // Fade indicator directly with title
        if (reportLink) reportLink.style.opacity = titleOpacity;
        titleSection.style.pointerEvents = titleOpacity > 0 ? 'auto' : 'none';

        // --- 2. Step 1 Section ---
        // Fades in starting at (phase1Scroll - fadeDistance), fully visible at phase1Scroll.
        let step1Progress = (s - (phase1Scroll - fadeDistance)) / fadeDistance;
        step1Progress = Math.max(0, Math.min(1, step1Progress));

        // If Step 2 is unlocked, Step 1 fades out starting from phase1Scroll.
        let step1FadeOutProgress = 0;
        if (step2Unlocked) {
            step1FadeOutProgress = (s - phase1Scroll) / fadeDistance;
            step1FadeOutProgress = Math.max(0, Math.min(1, step1FadeOutProgress));
        }

        // Combine inner and outer fading
        let finalStep1Opacity = step1Progress - step1FadeOutProgress;
        finalStep1Opacity = Math.max(0, Math.min(1, finalStep1Opacity));

        step1Card.style.opacity = finalStep1Opacity;

        // Slide animation using our calculated moveDistance
        let step1Y = (1 - step1Progress) * moveDistance + (step1FadeOutProgress * -moveDistance);
        step1Card.style.transform = `translateY(${step1Y}px)`;

        step1Section.style.pointerEvents = finalStep1Opacity > 0.5 ? 'auto' : 'none';

        // Unlock indicator logic for Step 1
        if (unlockStep2Indicator) {
            if (step2Unlocked) {
                let step2StartAppear = phase1Scroll * 2 - fadeDistance;

                // フェードアウトの開始地点を少し早める (Step2が出現し始める300px手前から消え始める)
                let arrowFadeStart = step2StartAppear - 300;
                let indicatorOpacity = 1 - ((s - arrowFadeStart) / 300);

                // Time-based smooth fade-in (takes 500ms from the moment it unlocks)
                let timeSinceUnlock = Date.now() - step2UnlockedTime;
                let timeFadeProgress = Math.min(1, timeSinceUnlock / 500);

                let finalOpacity = Math.max(0, Math.min(1, indicatorOpacity)) * timeFadeProgress * step1Progress;

                unlockStep2Indicator.style.opacity = finalOpacity;
                unlockStep2Indicator.style.pointerEvents = finalOpacity > 0 ? 'auto' : 'none';
            } else {
                unlockStep2Indicator.style.opacity = 0;
                unlockStep2Indicator.style.pointerEvents = 'none';
            }
        }

        // --- 3. Step 2 Section ---
        if (step2Unlocked) {
            // Fades in just before phase 2 completes
            let step2Progress = (s - (phase1Scroll * 2 - fadeDistance)) / fadeDistance;
            step2Progress = Math.max(0, Math.min(1, step2Progress));

            let step2FadeOutProgress = 0;
            if (step3Unlocked) {
                step2FadeOutProgress = (s - phase1Scroll * 2) / fadeDistance;
                step2FadeOutProgress = Math.max(0, Math.min(1, step2FadeOutProgress));
            }

            let finalStep2Opacity = step2Progress - step2FadeOutProgress;
            finalStep2Opacity = Math.max(0, Math.min(1, finalStep2Opacity));

            step2Card.style.opacity = finalStep2Opacity;

            let step2Y = (1 - step2Progress) * moveDistance + (step2FadeOutProgress * -moveDistance);
            step2Card.style.transform = `translateY(${step2Y}px)`;

            step2Section.style.pointerEvents = finalStep2Opacity > 0.5 ? 'auto' : 'none';

            // Unlock indicator logic for Step 2
            if (unlockStep3Indicator) {
                if (step3Unlocked) {
                    let step3StartAppear = phase1Scroll * 3 - fadeDistance;
                    let arrowFadeStart = step3StartAppear - 300;
                    let indicatorOpacity = 1 - ((s - arrowFadeStart) / 300);

                    let timeSinceUnlock = Date.now() - step3UnlockedTime;
                    let timeFadeProgress = Math.min(1, timeSinceUnlock / 500);

                    let finalOpacity = Math.max(0, Math.min(1, indicatorOpacity)) * timeFadeProgress * step2Progress;

                    unlockStep3Indicator.style.opacity = finalOpacity;
                    unlockStep3Indicator.style.pointerEvents = finalOpacity > 0 ? 'auto' : 'none';
                } else {
                    unlockStep3Indicator.style.opacity = 0;
                    unlockStep3Indicator.style.pointerEvents = 'none';
                }
            }
        } else {
            step2Card.style.opacity = 0;
            step2Section.style.pointerEvents = 'none';
            if (unlockStep3Indicator) {
                unlockStep3Indicator.style.opacity = 0;
                unlockStep3Indicator.style.pointerEvents = 'none';
            }
        }

        // --- 4. Step 3 Section ---
        if (step3Unlocked) {
            let step3Progress = (s - (phase1Scroll * 3 - fadeDistance)) / fadeDistance;
            step3Progress = Math.max(0, Math.min(1, step3Progress));
            
            let step3FadeOutProgress = 0;
            if (step4Unlocked) {
                step3FadeOutProgress = (s - phase1Scroll * 3) / fadeDistance;
                step3FadeOutProgress = Math.max(0, Math.min(1, step3FadeOutProgress));
            }

            let finalStep3Opacity = step3Progress - step3FadeOutProgress;
            finalStep3Opacity = Math.max(0, Math.min(1, finalStep3Opacity));

            step3Card.style.opacity = finalStep3Opacity;

            let step3Y = (1 - step3Progress) * moveDistance + (step3FadeOutProgress * -moveDistance);
            step3Card.style.transform = `translateY(${step3Y}px)`;

            step3Section.style.pointerEvents = finalStep3Opacity > 0.5 ? 'auto' : 'none';
            
            // Unlock indicator logic for Step 3
            if (unlockStep4Indicator) {
                if (step4Unlocked) {
                    let step4StartAppear = phase1Scroll * 4 - fadeDistance;
                    let arrowFadeStart = step4StartAppear - 300;
                    let indicatorOpacity = 1 - ((s - arrowFadeStart) / 300);
                    
                    let timeSinceUnlock = Date.now() - step4UnlockedTime;
                    let timeFadeProgress = Math.min(1, timeSinceUnlock / 500);
                    
                    let finalOpacity = Math.max(0, Math.min(1, indicatorOpacity)) * timeFadeProgress * step3Progress;
                    
                    unlockStep4Indicator.style.opacity = finalOpacity;
                    unlockStep4Indicator.style.pointerEvents = finalOpacity > 0 ? 'auto' : 'none';
                } else {
                    unlockStep4Indicator.style.opacity = 0;
                    unlockStep4Indicator.style.pointerEvents = 'none';
                }
            }
        } else {
            step3Card.style.opacity = 0;
            step3Section.style.pointerEvents = 'none';
            if (unlockStep4Indicator) {
                unlockStep4Indicator.style.opacity = 0;
                unlockStep4Indicator.style.pointerEvents = 'none';
            }
        }
        
        // --- 5. Step 4 (Final) Section ---
        if (step4Unlocked) {
            let step4Progress = (s - (phase1Scroll * 4 - fadeDistance)) / fadeDistance;
            step4Progress = Math.max(0, Math.min(1, step4Progress));
            
            let step4FadeOutProgress = 0;
            if (lastStepUnlocked) {
                step4FadeOutProgress = (s - phase1Scroll * 4) / fadeDistance;
                step4FadeOutProgress = Math.max(0, Math.min(1, step4FadeOutProgress));
            }

            let finalStep4Opacity = step4Progress - step4FadeOutProgress;
            finalStep4Opacity = Math.max(0, Math.min(1, finalStep4Opacity));

            step4Card.style.opacity = finalStep4Opacity;
            
            let step4Y = (1 - step4Progress) * moveDistance + (step4FadeOutProgress * -moveDistance);
            step4Card.style.transform = `translateY(${step4Y}px)`;
            
            step4Section.style.pointerEvents = finalStep4Opacity > 0.5 ? 'auto' : 'none';

            // Unlock indicator logic for Step 4
            if (unlockStep5Indicator) {
                if (lastStepUnlocked) {
                    let lastStepStartAppear = phase1Scroll * 5 - fadeDistance;
                    let arrowFadeStart = lastStepStartAppear - 300;
                    let indicatorOpacity = 1 - ((s - arrowFadeStart) / 300);
                    
                    let timeSinceUnlock = Date.now() - lastStepUnlockedTime;
                    let timeFadeProgress = Math.min(1, timeSinceUnlock / 500);
                    
                    let finalOpacity = Math.max(0, Math.min(1, indicatorOpacity)) * timeFadeProgress * step4Progress;
                    
                    unlockStep5Indicator.style.opacity = finalOpacity;
                    unlockStep5Indicator.style.pointerEvents = finalOpacity > 0 ? 'auto' : 'none';
                } else {
                    unlockStep5Indicator.style.opacity = 0;
                    unlockStep5Indicator.style.pointerEvents = 'none';
                }
            }
        } else {
            step4Card.style.opacity = 0;
            step4Section.style.pointerEvents = 'none';
            if (unlockStep5Indicator) {
                unlockStep5Indicator.style.opacity = 0;
                unlockStep5Indicator.style.pointerEvents = 'none';
            }
        }

        // --- 6. LAST STEP Section ---
        if (lastStepUnlocked) {
            let lastStepProgress = (s - (phase1Scroll * 5 - fadeDistance)) / fadeDistance;
            lastStepProgress = Math.max(0, Math.min(1, lastStepProgress));

            let lastStepFadeOutProgress = 0;
            if (clearUnlocked) {
                lastStepFadeOutProgress = (s - phase1Scroll * 5) / fadeDistance;
                lastStepFadeOutProgress = Math.max(0, Math.min(1, lastStepFadeOutProgress));
            }

            let finalLastStepOpacity = lastStepProgress - lastStepFadeOutProgress;
            finalLastStepOpacity = Math.max(0, Math.min(1, finalLastStepOpacity));

            lastStepCard.style.opacity = finalLastStepOpacity;

            let lastStepY = (1 - lastStepProgress) * moveDistance + (lastStepFadeOutProgress * -moveDistance);
            lastStepCard.style.transform = `translateY(${lastStepY}px)`;

            lastStepSection.style.pointerEvents = finalLastStepOpacity > 0.5 ? 'auto' : 'none';

            // Unlock indicator logic for LAST STEP
            if (unlockClearIndicator) {
                if (clearUnlocked) {
                    let clearStartAppear = phase1Scroll * 6 - fadeDistance;
                    let arrowFadeStart = clearStartAppear - 300;
                    let indicatorOpacity = 1 - ((s - arrowFadeStart) / 300);
                    
                    let timeSinceUnlock = Date.now() - clearUnlockedTime;
                    let timeFadeProgress = Math.min(1, timeSinceUnlock / 500);
                    
                    let finalOpacity = Math.max(0, Math.min(1, indicatorOpacity)) * timeFadeProgress * lastStepProgress;
                    
                    unlockClearIndicator.style.opacity = finalOpacity;
                    unlockClearIndicator.style.pointerEvents = finalOpacity > 0 ? 'auto' : 'none';
                } else {
                    unlockClearIndicator.style.opacity = 0;
                    unlockClearIndicator.style.pointerEvents = 'none';
                }
            }
        } else {
            lastStepCard.style.opacity = 0;
            lastStepSection.style.pointerEvents = 'none';
            if (unlockClearIndicator) {
                unlockClearIndicator.style.opacity = 0;
                unlockClearIndicator.style.pointerEvents = 'none';
            }
        }

        // --- 7. Clear Section ---
        if (clearUnlocked) {
            let clearProgress = (s - (phase1Scroll * 6 - fadeDistance)) / fadeDistance;
            clearProgress = Math.max(0, Math.min(1, clearProgress));

            if (clearCard) {
                clearCard.style.opacity = clearProgress;
                let clearY = (1 - clearProgress) * moveDistance;
                clearCard.style.transform = `translateY(${clearY}px)`;
            }

            if (clearSection) {
                clearSection.style.pointerEvents = clearProgress > 0.5 ? 'auto' : 'none';
            }
        } else {
            if (clearCard) clearCard.style.opacity = 0;
            if (clearSection) clearSection.style.pointerEvents = 'none';
        }

        requestAnimationFrame(render);
    }

    // Version Trigger (Tap 'M' 5 times)
    const versionTrigger = document.getElementById('version-trigger');
    let tapCount = 0;
    let tapTimeout;
    if (versionTrigger) {
        // Prevent double-tap zoom on mobile to allow fast tapping
        versionTrigger.style.touchAction = 'manipulation';
        versionTrigger.addEventListener('click', () => {
            tapCount++;
            clearTimeout(tapTimeout);
            if (tapCount >= 5) {
                alert('Version: 1.0.3 (Reverted to original)');
                tapCount = 0;
            } else {
                tapTimeout = setTimeout(() => {
                    tapCount = 0;
                }, 1000); // Reset count if more than 1s passes between taps
            }
        });
    }

    // Start loop
    render();
});
