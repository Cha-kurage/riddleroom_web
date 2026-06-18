document.addEventListener('DOMContentLoaded', () => {
    // Android Chrome Keyboard Fix
    if (window.visualViewport) {
        const updateViewport = () => {
            document.documentElement.style.setProperty('--viewport-height', `${window.visualViewport.height}px`);
        };
        window.visualViewport.addEventListener('resize', updateViewport);
        updateViewport();
    }

    // Developer Reset Logic
    const devArea = document.createElement('div');
    devArea.style.position = 'fixed';
    devArea.style.bottom = '0';
    devArea.style.right = '0';
    devArea.style.width = '80px';
    devArea.style.height = '80px';
    devArea.style.zIndex = '9999';
    devArea.style.cursor = 'default';
    document.body.appendChild(devArea);

    let devClickCount = 0;
    let devClickTimer = null;
    devArea.addEventListener('click', () => {
        devClickCount++;
        if (devClickCount === 1) {
            devClickTimer = setTimeout(() => {
                devClickCount = 0;
            }, 2000);
        }
        if (devClickCount >= 5) {
            clearTimeout(devClickTimer);
            localStorage.clear();
            alert('開発用リセット：すべてのデータを初期化しました。タイトルに戻ります。');
            window.location.href = 'index.html';
        }
    });

    // Save progress logic
    const stepIndices = { 'index':0, 'rules':1, 'step1':2, 'step2':3, 'step3':4, 'last_step':5, 'clear':6 };
    
    const saveProgress = (step) => {
        const current = localStorage.getItem('riddleroom_progress');
        if (!current || stepIndices[step] > (stepIndices[current] || 0)) {
            localStorage.setItem('riddleroom_progress', step);
        }
    };

    const getProgress = () => {
        return localStorage.getItem('riddleroom_progress') || 'index';
    };

    // Helper for input style
    const inputSuccessStyle = (inputEl) => {
        inputEl.style.borderColor = '#4CAF50';
        inputEl.style.color = '#4CAF50';
        const submitBtn = inputEl.parentElement.querySelector('.submit-btn');
        if (submitBtn) {
            submitBtn.style.color = '#4CAF50';
        }
    };

    const shakeInput = (inputEl) => {
        inputEl.style.animation = 'none';
        void inputEl.offsetWidth;
        inputEl.style.animation = 'shake 0.5s';
    };

    // Title / Index page
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        const currentProgress = getProgress();
        const urlParams = new URLSearchParams(window.location.search);
        
        if (currentProgress && currentProgress !== 'index' && !urlParams.has('return')) {
            // 自動的に前回の続きのページへリダイレクト
            window.location.replace(currentProgress + '.html');
        }
        
        startBtn.addEventListener('click', () => {
            window.location.href = 'rules.html';
        });
    }

    // Rules page
    const rulesBtn = document.getElementById('rules-next-btn');
    if (rulesBtn) {
        saveProgress('rules');
        rulesBtn.addEventListener('click', () => {
            window.location.href = 'step1.html';
        });
    }

    // Step 1
    const answer1Input = document.getElementById('answer1');
    const submit1Btn = document.getElementById('submit1');
    const feedback1Container = document.getElementById('feedback1');
    const nextBtn1 = document.getElementById('next-btn1');
    
    if (answer1Input && submit1Btn) {
        saveProgress('step1');
        
        const restoreStep1 = (ans) => {
            answer1Input.value = ans;
            inputSuccessStyle(answer1Input);
            answer1Input.disabled = true;
            submit1Btn.disabled = true;
            feedback1Container.innerHTML = `
                <div class="success-message">
                    <p class="success-text" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0;">正解！</p>
                </div>
            `;
            nextBtn1.classList.remove('hidden');
        };

        const savedAns1 = localStorage.getItem('riddleroom_step1_cleared');
        if (savedAns1) restoreStep1(savedAns1);

        const checkAnswer1 = () => {
            if (nextBtn1 && !nextBtn1.classList.contains('hidden')) return;
            const answer = answer1Input.value.trim();
            if (answer === 'イラスト' || answer === 'いらすと') {
                localStorage.setItem('riddleroom_step1_cleared', answer);
                restoreStep1(answer);
            } else if (answer !== '') {
                shakeInput(answer1Input);
            }
        };
        submit1Btn.addEventListener('click', checkAnswer1);
        answer1Input.addEventListener('keypress', (e) => { if (e.key === 'Enter') checkAnswer1(); });
    }

    // Step 2
    const answer2Input = document.getElementById('answer2');
    const submit2Btn = document.getElementById('submit2');
    const feedback2Container = document.getElementById('feedback2');
    const nextBtn2 = document.getElementById('next-btn2');

    if (answer2Input && submit2Btn) {
        saveProgress('step2');
        
        const restoreStep2 = (ans) => {
            answer2Input.value = ans;
            inputSuccessStyle(answer2Input);
            answer2Input.disabled = true;
            submit2Btn.disabled = true;
            feedback2Container.innerHTML = `
                <div class="success-message">
                    <p class="success-text" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0;">正解！</p>
                </div>
            `;
            nextBtn2.classList.remove('hidden');
        };

        const savedAns2 = localStorage.getItem('riddleroom_step2_cleared');
        if (savedAns2) restoreStep2(savedAns2);

        const checkAnswer2 = () => {
            if (nextBtn2 && !nextBtn2.classList.contains('hidden')) return;
            const answer = answer2Input.value.trim();
            if (answer === 'クエスト' || answer === 'くえすと') {
                localStorage.setItem('riddleroom_step2_cleared', answer);
                restoreStep2(answer);
            } else if (answer !== '') {
                shakeInput(answer2Input);
            }
        };
        submit2Btn.addEventListener('click', checkAnswer2);
        answer2Input.addEventListener('keypress', (e) => { if (e.key === 'Enter') checkAnswer2(); });
    }

    // Step 3 (Merged with Step 4)
    const answer3_1Input = document.getElementById('answer3_1');
    const answer3_2Input = document.getElementById('answer3_2');
    const submit3Btn = document.getElementById('submit3');
    const feedback3Container = document.getElementById('feedback3');

    const answer4Input = document.getElementById('answer4');
    const submit4Btn = document.getElementById('submit4');
    const feedback4Container = document.getElementById('feedback4');
    const nextBtn4 = document.getElementById('next-btn4');
    
    const phase1Div = document.getElementById('step3-phase1');
    const phase2Div = document.getElementById('step3-phase2');

    if (answer3_1Input && answer3_2Input && submit3Btn) {
        saveProgress('step3');

        const transitionToPhase2 = () => {
            if (phase1Div && phase2Div) {
                feedback3Container.innerHTML = `
                    <div class="success-message">
                        <p class="success-text" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0;">正解！</p>
                    </div>
                `;
                phase2Div.style.display = 'block';
                void phase2Div.offsetWidth;
                phase2Div.style.opacity = '1';
            }
        };

        const restoreStep3Phase1 = (ans1, ans2, skipAnimation) => {
            answer3_1Input.value = ans1;
            answer3_2Input.value = ans2;
            inputSuccessStyle(answer3_1Input);
            inputSuccessStyle(answer3_2Input);
            answer3_1Input.disabled = true;
            answer3_2Input.disabled = true;
            submit3Btn.disabled = true;
            
            if (skipAnimation && phase1Div && phase2Div) {
                feedback3Container.innerHTML = `
                    <div class="success-message">
                        <p class="success-text" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0;">正解！</p>
                    </div>
                `;
                phase2Div.style.display = 'block';
                phase2Div.style.opacity = '1';
            }
        };

        const restoreStep3Phase2 = (ans) => {
            if (answer4Input && submit4Btn && feedback4Container && nextBtn4) {
                answer4Input.value = ans;
                inputSuccessStyle(answer4Input);
                answer4Input.disabled = true;
                submit4Btn.disabled = true;
                feedback4Container.innerHTML = `
                    <div class="success-message">
                        <p class="success-text" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0;">正解！</p>
                    </div>
                `;
                nextBtn4.classList.remove('hidden');
            }
        };

        const savedAns3Phase1 = localStorage.getItem('riddleroom_step3_cleared');
        const savedAns3Phase2 = localStorage.getItem('riddleroom_step4_cleared'); // keep using step4 key for backward compatibility

        if (savedAns3Phase1) {
            const parts = savedAns3Phase1.split(',');
            // If already cleared, we show phase 1 correct state and display phase 2 below it
            restoreStep3Phase1(parts[0], parts[1], true);
        }
        if (savedAns3Phase2) {
            restoreStep3Phase2(savedAns3Phase2);
        }

        const checkAnswer3Phase1 = () => {
            if (answer3_1Input.disabled) return;
            const ans1 = answer3_1Input.value.trim();
            const ans2 = answer3_2Input.value.trim();
            const isOndoku = (val) => ['おんどく', 'オンドク', '音読'].includes(val);
            const isChiritori = (val) => ['ちりとり', 'チリトリ'].includes(val);
            const correct = (isOndoku(ans1) && isChiritori(ans2)) || (isChiritori(ans1) && isOndoku(ans2));

            if (correct) {
                localStorage.setItem('riddleroom_step3_cleared', ans1 + ',' + ans2);
                restoreStep3Phase1(ans1, ans2, false);
                transitionToPhase2();
            } else {
                if (ans1 !== '' && !(isOndoku(ans1) || isChiritori(ans1))) shakeInput(answer3_1Input);
                if (ans2 !== '' && !(isOndoku(ans2) || isChiritori(ans2))) shakeInput(answer3_2Input);
                if (ans1 === '' && ans2 === '') { shakeInput(answer3_1Input); shakeInput(answer3_2Input); }
            }
        };

        submit3Btn.addEventListener('click', checkAnswer3Phase1);
        answer3_1Input.addEventListener('keypress', (e) => { if (e.key === 'Enter') checkAnswer3Phase1(); });
        answer3_2Input.addEventListener('keypress', (e) => { if (e.key === 'Enter') checkAnswer3Phase1(); });

        // Phase 2 logic (former Step 4)
        if (answer4Input && submit4Btn && feedback4Container && nextBtn4) {
            const checkAnswer4 = () => {
                if (nextBtn4 && !nextBtn4.classList.contains('hidden')) return;
                const answer = answer4Input.value.trim();
                if (answer === 'さいご' || answer === '最後' || answer === 'サイゴ') {
                    localStorage.setItem('riddleroom_step4_cleared', answer);
                    restoreStep3Phase2(answer);
                } else if (answer !== '') {
                    shakeInput(answer4Input);
                }
            };
            submit4Btn.addEventListener('click', checkAnswer4);
            answer4Input.addEventListener('keypress', (e) => { if (e.key === 'Enter') checkAnswer4(); });
        }
    }

    // Last Step
    const answer5_1Input = document.getElementById('answer5_1');
    const submit5_1Btn = document.getElementById('submit5_1');
    const feedback5_1Container = document.getElementById('feedback5_1');
    
    const answer5_2Input = document.getElementById('answer5_2');
    const submit5_2Btn = document.getElementById('submit5_2');
    const feedback5_2Container = document.getElementById('feedback5_2');
    const nextBtn5 = document.getElementById('next-btn5');
    
    const lastStepPhase1Div = document.getElementById('last-step-phase1');
    const lastStepPhase2Div = document.getElementById('last-step-phase2');

    if (answer5_1Input && answer5_2Input && submit5_1Btn) {
        saveProgress('last_step');

        const transitionToLastStepPhase2 = (displayWord) => {
            if (lastStepPhase1Div && lastStepPhase2Div) {
                feedback5_1Container.innerHTML = `
                    <div class="success-message">
                        <p class="success-text" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.8rem;">正解！</p>
                        <p class="success-text" style="line-height: 1.6; color: var(--text-main);">
                            どうやら天井の${displayWord}は取り外せるようだ。
                        </p>
                    </div>
                `;
                lastStepPhase2Div.style.display = 'block';
                void lastStepPhase2Div.offsetWidth;
                lastStepPhase2Div.style.opacity = '1';
            }
        };

        const restoreLastStepPhase1 = (ans, displayWord, skipAnimation) => {
            answer5_1Input.value = ans;
            inputSuccessStyle(answer5_1Input);
            answer5_1Input.disabled = true;
            submit5_1Btn.disabled = true;
            
            if (displayWord === 'CAMERA_SKIP') {
                feedback5_1Container.innerHTML = `
                    <div class="success-message">
                        <p class="success-text" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.8rem;">正解！</p>
                        <p class="success-text" style="line-height: 1.6;">
                            リドルルームの全ての謎を解いた！
                        </p>
                    </div>
                `;
                if (nextBtn5) nextBtn5.classList.remove('hidden');
            } else if (skipAnimation && lastStepPhase1Div && lastStepPhase2Div) {
                feedback5_1Container.innerHTML = `
                    <div class="success-message">
                        <p class="success-text" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.8rem;">正解！</p>
                        <p class="success-text" style="line-height: 1.6; color: var(--text-main);">
                            どうやら天井の${displayWord}は取り外せるようだ。
                        </p>
                    </div>
                `;
                lastStepPhase2Div.style.display = 'block';
                lastStepPhase2Div.style.opacity = '1';
            }
        };

        const restoreLastStepPhase2 = (ans) => {
            if (answer5_2Input && submit5_2Btn && feedback5_2Container && nextBtn5) {
                answer5_2Input.value = ans;
                inputSuccessStyle(answer5_2Input);
                answer5_2Input.disabled = true;
                submit5_2Btn.disabled = true;
                feedback5_2Container.innerHTML = `
                    <div class="success-message">
                        <p class="success-text" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.8rem;">正解！</p>
                        <p class="success-text" style="line-height: 1.6;">
                            リドルルームの全ての謎を解いた！
                        </p>
                    </div>
                `;
                nextBtn5.classList.remove('hidden');
            }
        };

        const savedAns5Phase1 = localStorage.getItem('riddleroom_last_step_phase1_cleared');
        const savedAns5Phase2 = localStorage.getItem('riddleroom_last_step_cleared');

        let skippedPhase2 = false;
        if (savedAns5Phase1) {
            const parts = savedAns5Phase1.split(',');
            if (parts[1] === 'CAMERA_SKIP') {
                skippedPhase2 = true;
                restoreLastStepPhase1(parts[0], 'CAMERA_SKIP', true);
            } else {
                restoreLastStepPhase1(parts[0], parts[1] || '明かり', true);
            }
        }
        if (savedAns5Phase2 && !skippedPhase2) {
            // For backward compatibility
            if (!savedAns5Phase1) restoreLastStepPhase1('ライト', 'ライト', true);
            restoreLastStepPhase2(savedAns5Phase2);
        }

        const checkAnswer5Phase1 = () => {
            if (answer5_1Input.disabled) return;
            const answer = answer5_1Input.value.trim();
            
            const isCamera = ['カメラ', 'かめら'].includes(answer);
            if (isCamera) {
                localStorage.setItem('riddleroom_last_step_cleared', answer);
                localStorage.setItem('riddleroom_last_step_phase1_cleared', answer + ',CAMERA_SKIP');
                restoreLastStepPhase1(answer, 'CAMERA_SKIP', false);
                return;
            }

            let displayWord = "";
            if (['ライト', 'らいと'].includes(answer)) displayWord = 'ライト';
            else if (['あかり', 'アカリ', '明かり'].includes(answer)) displayWord = '明かり';

            if (displayWord !== "") {
                localStorage.setItem('riddleroom_last_step_phase1_cleared', answer + ',' + displayWord);
                restoreLastStepPhase1(answer, displayWord, false);
                transitionToLastStepPhase2(displayWord);
            } else if (answer !== '') {
                shakeInput(answer5_1Input);
            }
        };
        submit5_1Btn.addEventListener('click', checkAnswer5Phase1);
        answer5_1Input.addEventListener('keypress', (e) => { if (e.key === 'Enter') checkAnswer5Phase1(); });

        if (answer5_2Input && submit5_2Btn && feedback5_2Container && nextBtn5) {
            const checkAnswer5Phase2 = () => {
                if (nextBtn5 && !nextBtn5.classList.contains('hidden') && !skippedPhase2) return;
                const answer = answer5_2Input.value.trim();
                const isCamera = ['カメラ', 'かめら'].includes(answer);
                if (isCamera) {
                    localStorage.setItem('riddleroom_last_step_cleared', answer);
                    restoreLastStepPhase2(answer);
                } else if (answer !== '') {
                    shakeInput(answer5_2Input);
                }
            };
            submit5_2Btn.addEventListener('click', checkAnswer5Phase2);
            answer5_2Input.addEventListener('keypress', (e) => { if (e.key === 'Enter') checkAnswer5Phase2(); });
        }
    }

    if (document.querySelector('img[src="clear.png"]')) {
        saveProgress('clear');
    }

    // Add CSS for shake animation dynamically
    if (!document.getElementById('shake-style')) {
        const style = document.createElement('style');
        style.id = 'shake-style';
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
    }
});
