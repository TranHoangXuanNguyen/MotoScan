// ========== SVG ICONS ==========
const SVG_ICONS = {
    obd_conn: `<svg viewBox="0 0 64 64"><path fill="#f39c12" d="M12 40h40v12H12z"/><rect x="18" y="34" width="6" height="6" fill="#d35400"/><rect x="40" y="34" width="6" height="6" fill="#d35400"/><path fill="none" stroke="#2c3e50" stroke-width="3" stroke-linecap="round" d="M16 26c4-6 10-8 16-8s12 2 16 8M20 22l-6-6M44 22l6-6"/><circle cx="32" cy="18" r="6" fill="#e74c3c"/></svg>`,
    signal_sim: `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="26" fill="none" stroke="#e67e22" stroke-width="4"/><path fill="none" stroke="#2980b9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M14 32h6l4-12 8 24 8-20 4 8h6"/></svg>`,
    battery_check: `<svg viewBox="0 0 64 64"><rect x="10" y="20" width="44" height="32" rx="4" fill="#e67e22"/><rect x="18" y="14" width="8" height="6" fill="#d35400"/><rect x="38" y="14" width="8" height="6" fill="#d35400"/><path stroke="#fff" stroke-width="4" stroke-linecap="round" d="M18 36h10M36 36h10M41 31v10"/></svg>`,
    power_gen: `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="26" fill="none" stroke="#2980b9" stroke-width="4"/><path fill="#f1c40f" stroke="#d35400" stroke-width="2" d="M34 10L18 34h12l-4 20 20-26H32z"/></svg>`,
    ecu_sensor: `<svg viewBox="0 0 64 64"><rect x="12" y="18" width="40" height="28" rx="4" fill="#003366"/><text x="32" y="36" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">ECU</text><path stroke="#003366" stroke-width="3" stroke-linecap="round" d="M20 12v6M32 12v6M44 12v6M20 46v6M32 46v6M44 46v6"/></svg>`,
    auto_prog: `<svg viewBox="0 0 64 64"><path fill="none" stroke="#2980b9" stroke-width="4" stroke-linecap="round" d="M52 32A20 20 0 1 1 32 12"/><path fill="#2980b9" d="M32 4l8 8-8 8z"/><text x="31" y="41" fill="#003366" font-size="22" font-weight="900" text-anchor="middle">A</text></svg>`,
    rpm_abs: `<svg viewBox="0 0 64 64"><path fill="none" stroke="#e67e22" stroke-width="4" stroke-linecap="round" d="M12 44a22 22 0 1 1 40 0"/><path stroke="#e74c3c" stroke-width="4" stroke-linecap="round" d="M32 36l12-16"/><circle cx="32" cy="36" r="4" fill="#2c3e50"/></svg>`,
    honda: `<svg viewBox="0 0 64 64"><path fill="#cc0000" d="M8 20c12 2 20-8 48-12-14 12-24 16-36 18 10 2 20-2 30-6-14 10-24 14-42 16 12 4 22 2 34-2-18 10-28 12-34 16h40c-2 4-20 6-40 6 24 0 46-6 50-20V12L8 20z"/></svg>`,
    yamaha: `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="26" fill="none" stroke="#cc0000" stroke-width="4"/><path fill="#cc0000" d="M32 12v20M20 20l12 12M44 20L32 32M32 32v18M20 44l12-12M44 44L32 32"/></svg>`,
    piaggio: `<svg viewBox="0 0 64 64"><path fill="#0055a5" d="M32 6L10 20v24l22 14 22-14V20L32 6zm0 10l12 8v16l-12 8-12-8V24l12-8z"/></svg>`,
    sym: `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="26" fill="#cc0000"/><text x="32" y="38" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">SYM</text></svg>`,
    kymco: `<svg viewBox="0 0 64 64"><ellipse cx="32" cy="32" rx="28" ry="18" fill="none" stroke="#cc0000" stroke-width="4"/><path fill="#cc0000" d="M18 24l12 8-12 8M32 24l12 8-12 8"/></svg>`,
    lang_vi: `<svg viewBox="0 0 64 44"><rect width="64" height="44" fill="#da251d"/><polygon fill="#ffff00" points="32,8 36,20 48,20 38,28 42,40 32,32 22,40 26,28 16,20 28,20"/></svg>`,
    lang_en: `<svg viewBox="0 0 64 44"><rect width="64" height="44" fill="#012169"/><path d="M0 0l64 44M64 0L0 44" stroke="#fff" stroke-width="6"/><path d="M0 0l64 44M64 0L0 44" stroke="#C8102E" stroke-width="3"/><path d="M32 0v44M0 22h64" stroke="#fff" stroke-width="10"/><path d="M32 0v44M0 22h64" stroke="#C8102E" stroke-width="6"/></svg>`,
    scooter: `<svg viewBox="0 0 64 64"><path fill="#2c3e50" d="M12 42a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm40 0a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM16 38h16l8-16h10v-4H38l-8 16H18z"/></svg>`
};

// ========== VIEW DATA ==========
function getViewsData() {
    return {
        chanDoan: [
            { id: 'obd_conn', title: I18N.t('card_obd_conn'), iconKey: 'obd_conn' },
            { id: 'signal_sim', title: I18N.t('card_signal_sim'), iconKey: 'signal_sim' },
            { id: 'battery_check', title: I18N.t('card_battery_check'), iconKey: 'battery_check' },
            { id: 'power_gen', title: I18N.t('card_power_gen'), iconKey: 'power_gen' },
            { id: 'ecu_sensor', title: I18N.t('card_ecu_sensor'), iconKey: 'ecu_sensor' },
            { id: 'auto_prog', title: I18N.t('card_auto_prog'), iconKey: 'auto_prog' },
            { id: 'rpm_abs', title: I18N.t('card_rpm_abs'), iconKey: 'rpm_abs' }
        ],
        nhaSanXuat: [
            { id: 'honda', title: 'HONDA', iconKey: 'honda' },
            { id: 'yamaha', title: 'YAMAHA', iconKey: 'yamaha' },
            { id: 'piaggio', title: 'PIAGGIO', iconKey: 'piaggio' },
            { id: 'sym', title: 'SYM', iconKey: 'sym' },
            { id: 'kymco', title: 'KYMCO', iconKey: 'kymco' }
        ],
        ngonNgu: [
            { id: 'lang_vi', title: I18N.t('lang_vi'), iconKey: 'lang_vi' },
            { id: 'lang_en', title: I18N.t('lang_en'), iconKey: 'lang_en' }
        ],
        mauXeHonda: [
            { id: 'ab_08_10', title: 'AIR BLADE\n(2008 - 2010)', iconKey: 'scooter' },
            { id: 'ab_11_12', title: 'AIR BLADE\n(2011 - 2012)', iconKey: 'scooter' },
            { id: 'ab_18_19', title: 'AIR BLADE\n(2018 - 2019)', iconKey: 'scooter' },
            { id: 'dylan', title: 'DYLAN', iconKey: 'scooter' }
        ]
    };
}

// ========== NAVIGATION ==========
let navStack = ['chanDoan'];
let currentView = 'chanDoan';
let actionHistory = [];
let waveformAnimId = null;

function loadView(viewKey, element) {
    if (element) {
        document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
        element.classList.add('active');
    }
    if (currentView !== viewKey) {
        navStack.push(viewKey);
        currentView = viewKey;
    }

    const grid = document.getElementById('gridContent');
    grid.innerHTML = '';

    // Special view: Thao tác gần nhất (Recent Actions)
    if (viewKey === 'thaoTac') {
        renderRecentActions(grid);
        return;
    }

    // Special view: Thông tin sản phẩm (Product Information) - Empty
    if (viewKey === 'thongTin') {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#888;">
            <div style="font-size:48px;margin-bottom:16px;">📦</div>
            <div style="font-size:16px;font-weight:600;color:#555;">${I18N.t('menu_product_info')}</div>
        </div>`;
        return;
    }

    // Special view: Tra cứu và tính toán (Lookup & Calculation) - Empty
    if (viewKey === 'traCuu') {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#888;">
            <div style="font-size:48px;margin-bottom:16px;">🔍</div>
            <div style="font-size:16px;font-weight:600;color:#555;">${I18N.t('lookup_title')}</div>
        </div>`;
        return;
    }

    const viewsData = getViewsData();
    const items = viewsData[viewKey] || viewsData['chanDoan'];

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => onCardClick(item.id, item.title, viewKey);
        const iconSvg = SVG_ICONS[item.iconKey] || SVG_ICONS['obd_conn'];
        card.innerHTML = `
            <div class="card-icon">${iconSvg}</div>
            <div class="card-title">${item.title.replace(/\n/g, '<br>')}</div>
        `;
        grid.appendChild(card);
    });
}

// ========== RECENT ACTIONS RENDERER ==========
function renderRecentActions(grid) {
    if (actionHistory.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:#888;">
            <div style="font-size:40px;margin-bottom:12px;">📋</div>
            <div style="font-size:14px;font-weight:600;">${I18N.t('recent_empty_title')}</div>
            <div style="font-size:12px;margin-top:4px;">${I18N.t('recent_empty_desc')}</div>
        </div>`;
    } else {
        let html = `<div style="grid-column:1/-1;">`;
        actionHistory.forEach((h) => {
            html += `<div style="background:white;border:1px solid #d0dae8;border-radius:8px;padding:10px 14px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;">
                <div>
                    <span style="font-size:13px;font-weight:600;color:#1a2b3c;">${h.action}</span>
                    <span style="font-size:11px;color:#999;margin-left:8px;">[${h.id}]</span>
                </div>
                <span style="font-size:11px;color:#0077b6;font-weight:600;">${h.time}</span>
            </div>`;
        });
        html += `</div>`;
        grid.innerHTML = html;
    }
}

// ========== CARD CLICK HANDLER ==========
function onCardClick(id, title, viewKey) {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('vi-VN');
    actionHistory.unshift({ time: timeStr, action: title.replace('\n', ' '), id: id });
    if (actionHistory.length > 20) actionHistory.pop();

    showLog(`[CLICK] ID: ${id} | ${title.replace('\n', ' ')}`);

    // Navigation to Honda models
    if (viewKey === 'nhaSanXuat' && id === 'honda') {
        loadView('mauXeHonda');
        return;
    }

    // Diagnostic functions
    if (viewKey === 'chanDoan') {
        switch (id) {
            case 'obd_conn': simOBDConnect(); break;
            case 'signal_sim': simSignalWaveform(); break;
            case 'battery_check': simBatteryCheck(); break;
            case 'power_gen': simPowerGen(); break;
            case 'ecu_sensor': simECUData(); break;
            case 'auto_prog': simAutoProg(); break;
            case 'rpm_abs': simRPMGauge(); break;
        }
        return;
    }

    // Honda models
    if (viewKey === 'mauXeHonda') {
        simModelDiag(title);
        return;
    }

    // Language selection
    if (viewKey === 'ngonNgu') {
        const langCode = id === 'lang_vi' ? 'vi' : 'en';
        I18N.setLanguage(langCode);
        showToast(I18N.t('toast_lang_changed') + title);
        return;
    }

    // Other manufacturers
    if (viewKey === 'nhaSanXuat') {
        showToast(title + I18N.t('toast_developing'));
        return;
    }
}

// ========== SIMULATIONS ==========

// 1. OBD Connection
function simOBDConnect() {
    openPopup(I18N.t('obd_title'), `
        <div class="obd-status">
            <div class="obd-anim" id="obdSpinner"></div>
            <div class="obd-text" id="obdText">${I18N.t('obd_searching')}</div>
            <div class="obd-detail" id="obdDetail">${I18N.t('obd_scanning_bt')}</div>
            <div class="obd-log" id="obdLog"></div>
        </div>
    `);
    const log = document.getElementById('obdLog');
    const steps = [
        { t: 500, log: I18N.t('obd_step1_log'), text: I18N.t('obd_step1_text'), detail: I18N.t('obd_step1_detail') },
        { t: 1200, log: I18N.t('obd_step2_log'), text: I18N.t('obd_step2_text'), detail: I18N.t('obd_step2_detail') },
        { t: 2000, log: I18N.t('obd_step3_log'), text: I18N.t('obd_step3_text'), detail: I18N.t('obd_step3_detail') },
        { t: 2800, log: I18N.t('obd_step4_log'), text: I18N.t('obd_step4_text'), detail: I18N.t('obd_step4_detail') },
        { t: 3500, log: I18N.t('obd_step5_log'), text: I18N.t('obd_step5_text'), detail: I18N.t('obd_step5_detail') },
        { t: 4200, log: I18N.t('obd_step6_log'), text: I18N.t('obd_step6_text'), detail: I18N.t('obd_step6_detail') },
        { t: 5000, log: I18N.t('obd_step7_log'), text: I18N.t('obd_step7_text'), detail: I18N.t('obd_step7_detail'), done: true },
    ];
    steps.forEach(step => {
        setTimeout(() => {
            if (!document.getElementById('obdLog')) return;
            log.innerHTML += step.log + '\n';
            log.scrollTop = log.scrollHeight;
            document.getElementById('obdText').textContent = step.text;
            document.getElementById('obdDetail').textContent = step.detail;
            if (step.done) {
                document.getElementById('obdSpinner').classList.add('connected');
                document.getElementById('obdText').style.color = '#2ecc71';
            }
        }, step.t);
    });
}

// 2. Signal Waveform
function simSignalWaveform() {
    openPopup(I18N.t('signal_title'), `
        <div class="waveform-container">
            <canvas class="waveform-canvas" id="waveCanvas"></canvas>
        </div>
        <div class="waveform-info">
            <div class="waveform-stat"><div class="waveform-stat-value" id="wfFreq">120</div><div class="waveform-stat-label">${I18N.t('signal_freq')}</div></div>
            <div class="waveform-stat"><div class="waveform-stat-value" id="wfVolt">4.8</div><div class="waveform-stat-label">${I18N.t('signal_volt')}</div></div>
            <div class="waveform-stat"><div class="waveform-stat-value" id="wfType">CKP</div><div class="waveform-stat-label">${I18N.t('signal_type')}</div></div>
            <div class="waveform-stat"><div class="waveform-stat-value" style="color:#2ecc71;">LIVE</div><div class="waveform-stat-label">${I18N.t('signal_status')}</div></div>
        </div>
    `);
    setTimeout(() => {
        const canvas = document.getElementById('waveCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth * 2;
        canvas.height = canvas.offsetHeight * 2;
        ctx.scale(2, 2);
        let offset = 0;

        function drawWave() {
            const w = canvas.offsetWidth, h = canvas.offsetHeight;
            ctx.clearRect(0, 0, w, h);
            ctx.strokeStyle = 'rgba(255,255,255,0.08)';
            ctx.lineWidth = 0.5;
            for (let i = 0; i < w; i += 40) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, h); ctx.stroke(); }
            for (let i = 0; i < h; i += 25) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(w, i); ctx.stroke(); }
            ctx.strokeStyle = 'rgba(255,255,255,0.15)';
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2); ctx.stroke();
            ctx.strokeStyle = '#00ff66';
            ctx.lineWidth = 2;
            ctx.shadowColor = '#00ff66';
            ctx.shadowBlur = 4;
            ctx.beginPath();
            for (let x = 0; x < w; x++) {
                const phase = (x + offset) * 0.06;
                const tooth = Math.sin(phase) > 0 ? 1 : -1;
                const noise = (Math.random() - 0.5) * 2;
                const y = h / 2 + tooth * (h * 0.3) + noise;
                x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.shadowBlur = 0;
            offset += 3;
            waveformAnimId = requestAnimationFrame(drawWave);
        }
        drawWave();
    }, 100);
}

// 3. Battery Check
function simBatteryCheck() {
    const voltage = (11.5 + Math.random() * 2).toFixed(1);
    const percent = Math.min(100, Math.max(0, ((voltage - 10.5) / 3) * 100));
    const status = voltage >= 12.4 ? 'good' : voltage >= 11.8 ? 'warning' : 'danger';
    const statusText = voltage >= 12.4 ? I18N.t('battery_good') : voltage >= 11.8 ? I18N.t('battery_warning') : I18N.t('battery_danger');

    openPopup(I18N.t('battery_title'), `
        <div class="battery-display">
            <div class="battery-visual">
                <div class="battery-body">
                    <div class="battery-fill ${status}" id="batFill" style="width:0%"></div>
                </div>
                <div class="battery-tip"></div>
            </div>
            <div class="battery-info">
                <div class="battery-voltage">${voltage}V</div>
                <div class="battery-label">${I18N.t('battery_dc_label')}</div>
                <div class="battery-status ${status}">${statusText}</div>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:20px;">
            <div style="background:white;border:1px solid #d0dae8;border-radius:8px;padding:10px;text-align:center;">
                <div style="font-size:18px;font-weight:700;color:#0077b6;">${percent.toFixed(0)}%</div>
                <div style="font-size:10px;color:#888;">${I18N.t('battery_capacity')}</div>
            </div>
            <div style="background:white;border:1px solid #d0dae8;border-radius:8px;padding:10px;text-align:center;">
                <div style="font-size:18px;font-weight:700;color:#0077b6;">${(Math.random()*2+0.5).toFixed(1)}A</div>
                <div style="font-size:10px;color:#888;">${I18N.t('battery_charge_current')}</div>
            </div>
            <div style="background:white;border:1px solid #d0dae8;border-radius:8px;padding:10px;text-align:center;">
                <div style="font-size:18px;font-weight:700;color:#0077b6;">${(25+Math.random()*15).toFixed(0)}°C</div>
                <div style="font-size:10px;color:#888;">${I18N.t('battery_temperature')}</div>
            </div>
        </div>
    `);
    setTimeout(() => {
        const fill = document.getElementById('batFill');
        if (fill) fill.style.width = percent + '%';
    }, 200);
}

// 4. Power Gen
function simPowerGen() {
    openPopup(I18N.t('power_title'), `
        <div class="power-container">
            <div style="font-size:14px;font-weight:600;color:#333;margin-bottom:4px;">${I18N.t('power_status_label')}</div>
            <div style="font-size:12px;color:#2ecc71;font-weight:600;">${I18N.t('power_status_normal')}</div>
            <div class="power-readings">
                <div class="power-reading">
                    <div class="power-reading-value" id="pwrAC">${(12+Math.random()*8).toFixed(1)}</div>
                    <div class="power-reading-label">${I18N.t('power_vac_label')}</div>
                </div>
                <div class="power-reading">
                    <div class="power-reading-value" id="pwrDC">${(13.5+Math.random()*1.5).toFixed(1)}</div>
                    <div class="power-reading-label">${I18N.t('power_vdc_label')}</div>
                </div>
                <div class="power-reading">
                    <div class="power-reading-value" id="pwrRPM">${(800+Math.floor(Math.random()*600))}</div>
                    <div class="power-reading-label">${I18N.t('power_rpm_label')}</div>
                </div>
            </div>
            <div style="margin-top:16px;background:white;border:1px solid #d0dae8;border-radius:8px;padding:12px;">
                <div style="font-size:12px;font-weight:600;color:#333;margin-bottom:8px;">${I18N.t('power_detail_title')}</div>
                <div style="font-size:11px;color:#555;line-height:1.8;">
                    ${I18N.t('power_detail_1')}<br>
                    ${I18N.t('power_detail_2')}<br>
                    ${I18N.t('power_detail_3')}<br>
                    ${I18N.t('power_detail_4')}
                </div>
            </div>
        </div>
    `);
}

// 5. ECU Data
function simECUData() {
    openPopup(I18N.t('ecu_title'), `
        <div class="ecu-grid">
            <div class="ecu-item"><span class="ecu-item-label">${I18N.t('ecu_engine_speed')}</span><span class="ecu-item-value">${800+Math.floor(Math.random()*400)} RPM</span></div>
            <div class="ecu-item"><span class="ecu-item-label">${I18N.t('ecu_engine_temp')}</span><span class="ecu-item-value">${75+Math.floor(Math.random()*20)}°C</span></div>
            <div class="ecu-item"><span class="ecu-item-label">${I18N.t('ecu_o2_sensor')}</span><span class="ecu-item-value">${(0.1+Math.random()*0.8).toFixed(2)}V</span></div>
            <div class="ecu-item"><span class="ecu-item-label">${I18N.t('ecu_map_sensor')}</span><span class="ecu-item-value">${(30+Math.floor(Math.random()*70))} kPa</span></div>
            <div class="ecu-item"><span class="ecu-item-label">${I18N.t('ecu_tps')}</span><span class="ecu-item-value">${(Math.random()*20).toFixed(1)}%</span></div>
            <div class="ecu-item"><span class="ecu-item-label">${I18N.t('ecu_iat')}</span><span class="ecu-item-value">${30+Math.floor(Math.random()*15)}°C</span></div>
            <div class="ecu-item"><span class="ecu-item-label">${I18N.t('ecu_voltage')}</span><span class="ecu-item-value">${(12+Math.random()*2).toFixed(1)}V</span></div>
            <div class="ecu-item"><span class="ecu-item-label">${I18N.t('ecu_dtc')}</span><span class="ecu-item-value" style="color:#2ecc71;">${I18N.t('ecu_no_error')}</span></div>
            <div class="ecu-item"><span class="ecu-item-label">${I18N.t('ecu_injection_time')}</span><span class="ecu-item-value">${(2+Math.random()*3).toFixed(1)} ms</span></div>
            <div class="ecu-item"><span class="ecu-item-label">${I18N.t('ecu_ignition_angle')}</span><span class="ecu-item-value">${(10+Math.floor(Math.random()*20))}° BTDC</span></div>
        </div>
    `);
}

// 6. Auto Programming
function simAutoProg() {
    openPopup(I18N.t('prog_title'), `
        <div class="auto-prog-container">
            <div style="font-size:14px;font-weight:600;color:#333;" id="progTitle">${I18N.t('prog_programming')}</div>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill" id="progBar" style="width:0%"></div>
            </div>
            <div class="progress-text" id="progPercent">0%</div>
            <div class="progress-step" id="progStep">${I18N.t('prog_init')}</div>
            <div class="obd-log" id="progLog" style="margin-top:16px;"></div>
        </div>
    `);
    const steps = [
        { p: 10, step: I18N.t('prog_step1'), log: I18N.t('prog_step1_log') },
        { p: 25, step: I18N.t('prog_step2'), log: I18N.t('prog_step2_log') },
        { p: 40, step: I18N.t('prog_step3'), log: I18N.t('prog_step3_log') },
        { p: 55, step: I18N.t('prog_step4'), log: I18N.t('prog_step4_log') },
        { p: 70, step: I18N.t('prog_step5'), log: I18N.t('prog_step5_log') },
        { p: 85, step: I18N.t('prog_step6'), log: I18N.t('prog_step6_log') },
        { p: 100, step: I18N.t('prog_step7'), log: I18N.t('prog_step7_log'), done: true },
    ];
    steps.forEach((s, i) => {
        setTimeout(() => {
            const bar = document.getElementById('progBar');
            if (!bar) return;
            bar.style.width = s.p + '%';
            document.getElementById('progPercent').textContent = s.p + '%';
            document.getElementById('progStep').textContent = s.step;
            const log = document.getElementById('progLog');
            log.innerHTML += s.log + '\n';
            log.scrollTop = log.scrollHeight;
            if (s.done) {
                document.getElementById('progTitle').textContent = I18N.t('prog_success');
                document.getElementById('progTitle').style.color = '#2ecc71';
            }
        }, (i + 1) * 800);
    });
}

// 7. RPM Gauge
function simRPMGauge() {
    openPopup(I18N.t('rpm_title'), `
        <div class="gauge-container">
            <svg class="gauge-svg" viewBox="0 0 200 120" id="rpmGaugeSvg">
                <path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="#e0e0e0" stroke-width="12" stroke-linecap="round"/>
                <path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="#0077b6" stroke-width="12" stroke-linecap="round" id="rpmArc" stroke-dasharray="251" stroke-dashoffset="251"/>
                <text x="100" y="80" text-anchor="middle" font-size="28" font-weight="800" fill="#0077b6" id="rpmText">0</text>
                <text x="100" y="100" text-anchor="middle" font-size="11" fill="#888" font-weight="600">RPM</text>
                <text x="22" y="115" text-anchor="middle" font-size="8" fill="#aaa">0</text>
                <text x="100" y="18" text-anchor="middle" font-size="8" fill="#aaa">5000</text>
                <text x="178" y="115" text-anchor="middle" font-size="8" fill="#aaa">10000</text>
            </svg>
            <div style="display:flex;gap:24px;">
                <div style="text-align:center;"><div style="font-size:20px;font-weight:700;color:#2ecc71;" id="absStatus">OK</div><div style="font-size:10px;color:#888;">ABS</div></div>
                <div style="text-align:center;"><div style="font-size:20px;font-weight:700;color:#2ecc71;" id="hstcStatus">OK</div><div style="font-size:10px;color:#888;">HSTC</div></div>
                <div style="text-align:center;"><div style="font-size:20px;font-weight:700;color:#0077b6;" id="speedVal">0</div><div style="font-size:10px;color:#888;">km/h</div></div>
            </div>
        </div>
    `);
    let rpm = 0;
    let targetRPM = 800;
    let rpmInterval = setInterval(() => {
        if (!document.getElementById('rpmText')) { clearInterval(rpmInterval); return; }
        targetRPM = 800 + Math.sin(Date.now() / 1000) * 400 + Math.random() * 200;
        rpm += (targetRPM - rpm) * 0.1;
        const rpmVal = Math.floor(rpm);
        document.getElementById('rpmText').textContent = rpmVal;
        const ratio = Math.min(1, rpmVal / 10000);
        document.getElementById('rpmArc').setAttribute('stroke-dashoffset', 251 - ratio * 251);
        document.getElementById('speedVal').textContent = Math.floor(rpmVal / 100);
    }, 50);
}

// 8. Honda Model Diagnostic
function simModelDiag(modelName) {
    openPopup(`🏍️ ${modelName.replace('\n', ' ')} ${I18N.t('diag_title_suffix')}`, `
        <div class="diag-menu">
            <div class="diag-menu-item" onclick="simSubDiag('${I18N.t('diag_read_dtc_action')}')"><div class="diag-icon">🔍</div>${I18N.t('diag_read_dtc')}</div>
            <div class="diag-menu-item" onclick="simSubDiag('${I18N.t('diag_clear_dtc_action')}')"><div class="diag-icon">🗑️</div>${I18N.t('diag_clear_dtc')}</div>
            <div class="diag-menu-item" onclick="simSubDiag('${I18N.t('diag_data_stream_action')}')"><div class="diag-icon">📊</div>${I18N.t('diag_data_stream')}</div>
            <div class="diag-menu-item" onclick="simSubDiag('${I18N.t('diag_actuator_action')}')"><div class="diag-icon">⚙️</div>${I18N.t('diag_actuator_test')}</div>
            <div class="diag-menu-item" onclick="simSubDiag('${I18N.t('diag_smart_key_action')}')"><div class="diag-icon">🔑</div>${I18N.t('diag_smart_key')}</div>
            <div class="diag-menu-item" onclick="simSubDiag('${I18N.t('diag_flash_ecu_action')}')"><div class="diag-icon">💾</div>${I18N.t('diag_flash_ecu')}</div>
        </div>
    `);
}

function simSubDiag(name) {
    showToast(I18N.t('diag_performing') + name + '...');
    closePopup();
    setTimeout(() => {
        if (name.includes('DTC') || name.includes('mã lỗi')) {
            openPopup(I18N.t('dtc_results_title'), `
                <div style="background:white;border:1px solid #d0dae8;border-radius:8px;padding:16px;margin-bottom:10px;">
                    <div style="font-size:16px;font-weight:700;color:#e74c3c;">P0131</div>
                    <div style="font-size:12px;color:#555;margin-top:4px;">${I18N.t('dtc_p0131_desc')}</div>
                    <div style="font-size:11px;color:#888;margin-top:2px;">${I18N.t('dtc_p0131_status')}</div>
                </div>
                <div style="background:white;border:1px solid #d0dae8;border-radius:8px;padding:16px;margin-bottom:10px;">
                    <div style="font-size:16px;font-weight:700;color:#f39c12;">P0335</div>
                    <div style="font-size:12px;color:#555;margin-top:4px;">${I18N.t('dtc_p0335_desc')}</div>
                    <div style="font-size:11px;color:#888;margin-top:2px;">${I18N.t('dtc_p0335_status')}</div>
                </div>
                <div style="text-align:center;margin-top:12px;font-size:12px;color:#666;">${I18N.t('dtc_total')}<b>2${I18N.t('dtc_count_suffix')}</b></div>
            `);
        } else {
            showToast(name + I18N.t('diag_completed'));
        }
    }, 500);
}

// ========== TOP BAR ACTIONS ==========

function takeScreenshot() {
    const flash = document.getElementById('screenshotFlash');
    flash.classList.add('active');
    setTimeout(() => flash.classList.remove('active'), 500);
    showToast(I18N.t('toast_screenshot'));
}

function openSettings() {
    openPopup(I18N.t('settings_title'), `
        <div class="settings-group">
            <div class="settings-group-title">${I18N.t('settings_connection')}</div>
            <div class="settings-row"><span class="settings-label">${I18N.t('settings_bluetooth')}</span><div class="toggle-switch on" onclick="this.classList.toggle('on')"></div></div>
            <div class="settings-row"><span class="settings-label">${I18N.t('settings_auto_connect')}</span><div class="toggle-switch on" onclick="this.classList.toggle('on')"></div></div>
            <div class="settings-row"><span class="settings-label">${I18N.t('settings_device')}</span><span class="settings-value">MOTOSCAN-BT-04A2</span></div>
        </div>
        <div class="settings-group">
            <div class="settings-group-title">${I18N.t('settings_interface')}</div>
            <div class="settings-row"><span class="settings-label">${I18N.t('settings_brightness')}</span><span class="settings-value">85%</span></div>
            <div class="settings-row"><span class="settings-label">${I18N.t('settings_sound')}</span><div class="toggle-switch on" onclick="this.classList.toggle('on')"></div></div>
            <div class="settings-row"><span class="settings-label">${I18N.t('settings_language')}</span><span class="settings-value" data-i18n="settings_language_value">${I18N.t('settings_language_value')}</span></div>
        </div>
        <div class="settings-group">
            <div class="settings-group-title">${I18N.t('settings_system')}</div>
            <div class="settings-row"><span class="settings-label">${I18N.t('settings_version')}</span><span class="settings-value">V2.2 Build 0421</span></div>
            <div class="settings-row"><span class="settings-label">${I18N.t('settings_serial')}</span><span class="settings-value">MTR080421010-4</span></div>
            <div class="settings-row"><span class="settings-label">${I18N.t('settings_storage')}</span><span class="settings-value">1.2 GB / 8 GB</span></div>
            <div class="settings-row"><span class="settings-label">${I18N.t('settings_update')}</span><span class="settings-value" style="color:#2ecc71;">${I18N.t('settings_update_latest')}</span></div>
        </div>
    `);
}

function openPrint() {
    const now = new Date();
    const locale = I18N.currentLang === 'vi' ? 'vi-VN' : 'en-US';
    openPopup(I18N.t('print_title'), `
        <div class="print-preview">
            <h3>${I18N.t('print_report_title')}</h3>
            <hr>
            <b>${I18N.t('print_date')}</b> ${now.toLocaleDateString(locale)}<br>
            <b>${I18N.t('print_time')}</b> ${now.toLocaleTimeString(locale)}<br>
            <b>${I18N.t('print_device')}</b> MOTOSCAN TAB V2.2<br>
            <b>S/N:</b> MTR080421010-4<br>
            <hr>
            <b>${I18N.t('print_vehicle_info')}</b><br>
            ${I18N.t('print_brand')}<br>
            ${I18N.t('print_model')}<br>
            ${I18N.t('print_vin')}<br>
            ${I18N.t('print_year')}<br>
            <hr>
            <b>${I18N.t('print_results')}</b><br>
            ${I18N.t('print_battery_v')}<br>
            ${I18N.t('print_idle_rpm')}<br>
            ${I18N.t('print_engine_temp')}<br>
            ${I18N.t('print_o2_sensor')}<br>
            ${I18N.t('print_dtc')}<br>
            <hr>
            <b>${I18N.t('print_conclusion')}</b> ${I18N.t('print_conclusion_text')}<br>
            <b>${I18N.t('print_technician')}</b> _______________
        </div>
        <button class="print-btn" onclick="showToast(I18N.t('toast_printing'));closePopup();">${I18N.t('print_btn')}</button>
    `);
}

// ========== POPUP HELPERS ==========
function openPopup(title, bodyHTML) {
    stopAnimations();
    document.getElementById('popupTitle').textContent = title;
    document.getElementById('popupBody').innerHTML = bodyHTML;
    document.getElementById('popupOverlay').classList.add('active');
}

function closePopup() {
    document.getElementById('popupOverlay').classList.remove('active');
    stopAnimations();
}

function stopAnimations() {
    if (waveformAnimId) { cancelAnimationFrame(waveformAnimId); waveformAnimId = null; }
}

// ========== TOAST ==========
function showToast(text) {
    const toast = document.getElementById('toast');
    document.getElementById('toastText').textContent = text;
    toast.classList.add('active');
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => toast.classList.remove('active'), 2500);
}

// ========== NAV ==========
function goBack() {
    if (navStack.length > 1) {
        navStack.pop();
        const prev = navStack[navStack.length - 1];
        currentView = prev;
        loadView(prev);
    }
}

function goHome() {
    navStack = ['chanDoan'];
    currentView = 'chanDoan';
    const firstMenuItem = document.querySelector('.menu-item');
    loadView('chanDoan', firstMenuItem);
}

function showLog(text) {
    const logBox = document.getElementById('log-overlay');
    logBox.innerText = text;
    logBox.style.display = 'block';
    clearTimeout(window.logTimer);
    window.logTimer = setTimeout(() => logBox.style.display = 'none', 3000);
}

// ========== INIT ==========
window.onload = () => {
    I18N.init();
    I18N.refreshUI();
    loadView('chanDoan');
    
    // Close popup on overlay click
    document.getElementById('popupOverlay').addEventListener('click', function(e) {
        if (e.target === this) closePopup();
    });
};
