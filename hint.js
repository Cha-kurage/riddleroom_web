document.addEventListener('DOMContentLoaded', () => {
    const hintsData = [
        {
            title: "1st STEP",
            hints: [
                "ヒント1：壁にあるそれぞれの謎を解いてみましょう。イラストや図形が何を表しているか考えてみてください。（仮のヒントです）",
                "ヒント2：出てきた答えの「最初の文字」を拾いましょう。（仮のヒントです）",
                "ヒント3：拾った文字を並び替えると、ある一般的な単語になります。（仮のヒントです）",
                "ヒント4：答えは「〇〇〇〇」です。（仮のヒントです）"
            ]
        },
        {
            title: "2nd STEP",
            hints: [
                "ヒント1：封筒1の中のアイテムを取り出しましょう。（仮のヒントです）",
                "ヒント2：アイテムを枠に当てはめて、指示に従って解きましょう。（仮のヒントです）",
                "ヒント3：同じように、答えの最初の文字を並び替えます。（仮のヒントです）",
                "ヒント4：答えは「〇〇〇〇」です。（仮のヒントです）"
            ]
        },
        {
            title: "3rd STEP",
            hints: [
                "ヒント1：「最初を最後に」とはどういう意味か考えましょう。（仮のヒントです）",
                "ヒント2：今まで解いた謎の答えを見返してみましょう。（仮のヒントです）",
                "ヒント3：2つの単語が導き出されます。（仮のヒントです）",
                "ヒント4：答えは「〇〇〇〇」「〇〇〇〇」です。（仮のヒントです）"
            ]
        },
        {
            title: "LAST STEP",
            hints: [
                "ヒント1：封筒2の中身を確認しましょう。（仮のヒントです）",
                "ヒント2：今までの全てのアイテムや謎が手がかりになります。（仮のヒントです）",
                "ヒント3：特定の視点から見る必要があります。（仮のヒントです）",
                "ヒント4：答えは「〇〇〇」です。（仮のヒントです）"
            ]
        }
    ];

    const wrapper = document.getElementById('hints-wrapper');

    hintsData.forEach((step, index) => {
        const card = document.createElement('div');
        card.className = 'hint-step-card';

        const title = document.createElement('h2');
        title.className = 'hint-step-title';
        title.textContent = step.title;
        card.appendChild(title);

        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'hint-content-wrapper';

        const hintsList = [];
        step.hints.forEach((hintText, hintIndex) => {
            const item = document.createElement('div');
            item.className = 'hint-item';
            if (hintIndex !== 0) {
                item.classList.add('hidden');
            }
            
            const text = document.createElement('p');
            text.className = 'hint-text';
            text.innerHTML = hintText.replace(/\n/g, '<br>');
            item.appendChild(text);

            hintsList.push(item);
            contentWrapper.appendChild(item);
        });

        const btnWrapper = document.createElement('div');
        btnWrapper.className = 'hint-btn-wrapper';

        const btn = document.createElement('button');
        btn.className = 'next-hint-btn';
        
        let currentHintIndex = 0;
        
        const updateButtonText = () => {
            if (currentHintIndex === step.hints.length - 2) {
                btn.textContent = '最後のヒントを見る';
            } else if (currentHintIndex < step.hints.length - 1) {
                btn.textContent = '次のヒントを見る';
            } else {
                btn.classList.add('hidden');
            }
        };

        updateButtonText();

        if (step.hints.length > 1) {
            btn.addEventListener('click', () => {
                currentHintIndex++;
                if (currentHintIndex < step.hints.length) {
                    hintsList[currentHintIndex].classList.remove('hidden');
                    updateButtonText();
                }
            });
            btnWrapper.appendChild(btn);
        }

        contentWrapper.appendChild(btnWrapper);
        card.appendChild(contentWrapper);
        wrapper.appendChild(card);
    });
});
