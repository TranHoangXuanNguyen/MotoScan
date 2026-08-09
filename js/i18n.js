// ========== i18n INTERNATIONALIZATION MODULE ==========

const I18N = {
    currentLang: 'vi',
    
    translations: {
        vi: {
            // Sidebar menu
            menu_diagnostic: 'Chẩn đoán, lập trình',
            menu_recent: 'Thao tác gần nhất ...',
            menu_lookup: 'Tra cứu và tính toán',
            menu_product_info: 'Thông tin sản phẩm',
            menu_manufacturer: 'Nhà sản xuất',
            menu_language: 'Language | Ngôn ngữ',
            
            // Status bar
            status_connected: 'Kết nối thành công!',
            
            // Toast defaults
            toast_success: 'Thao tác thành công',
            toast_screenshot: '📸 Đã chụp màn hình!',
            toast_printing: '🖨️ Đang in...',
            toast_lang_changed: 'Đã chuyển ngôn ngữ: ',
            toast_developing: ' — Đang phát triển...',
            
            // Nav button titles
            nav_back: 'Quay lại',
            nav_home: 'Home',
            nav_screenshot: 'Chụp màn hình',
            nav_settings: 'Cài đặt',
            nav_print: 'In dữ liệu',
            
            // Diagnostic cards
            card_obd_conn: 'Kết nối hệ thống OBD trên xe',
            card_signal_sim: 'Giả lập và mô phỏng tín hiệu',
            card_battery_check: 'Kiểm tra ắc quy',
            card_power_gen: 'Kiểm tra phát điện và nạp điện',
            card_ecu_sensor: 'Kiểm tra ECU, cảm biến',
            card_auto_prog: 'Lập trình tự động',
            card_rpm_abs: 'Đo trực tiếp tốc độ động cơ (RPM), ABS/HSTC',
            
            // Language selection
            lang_vi: 'Việt Nam',
            lang_en: 'English',
            
            // OBD Connection simulation
            obd_title: '🔌 Kết nối OBD',
            obd_searching: 'Đang tìm kiếm thiết bị...',
            obd_scanning_bt: 'Quét Bluetooth...',
            obd_step1_log: '> Quét cổng Bluetooth...',
            obd_step1_text: 'Đang quét...',
            obd_step1_detail: 'Searching BT devices...',
            obd_step2_log: '> Tìm thấy: MOTOSCAN-BT-04A2',
            obd_step2_text: 'Tìm thấy thiết bị',
            obd_step2_detail: 'MOTOSCAN-BT-04A2',
            obd_step3_log: '> Kết nối Bluetooth... OK',
            obd_step3_text: 'Đang kết nối...',
            obd_step3_detail: 'Pairing...',
            obd_step4_log: '> Gửi lệnh ATZ... OK',
            obd_step4_text: 'Khởi tạo giao thức',
            obd_step4_detail: 'Init ELM327...',
            obd_step5_log: '> Giao thức: ISO 14230 (K-Line)',
            obd_step5_text: 'Xác nhận giao thức',
            obd_step5_detail: 'ISO 14230-4 KWP',
            obd_step6_log: '> Đọc VIN: MLHJF7410N5100XXX',
            obd_step6_text: 'Đọc số khung xe',
            obd_step6_detail: 'VIN OK',
            obd_step7_log: '> ECU phản hồi: Honda FI - PGM-FI',
            obd_step7_text: '✅ Kết nối thành công!',
            obd_step7_detail: 'Honda PGM-FI ECU Ready',
            
            // Signal waveform
            signal_title: '📡 Giả lập tín hiệu - CKP Sensor',
            signal_freq: 'Hz (Tần số)',
            signal_volt: 'Vpp (Biên độ)',
            signal_type: 'Loại tín hiệu',
            signal_status: 'Trạng thái',
            
            // Battery check
            battery_title: '🔋 Kiểm tra ắc quy',
            battery_dc_label: 'Điện áp ắc quy (DC)',
            battery_good: '✅ Ắc quy tốt',
            battery_warning: '⚠️ Cần sạc',
            battery_danger: '❌ Ắc quy yếu',
            battery_capacity: 'Dung lượng',
            battery_charge_current: 'Dòng nạp',
            battery_temperature: 'Nhiệt độ',
            
            // Power gen
            power_title: '⚡ Kiểm tra phát điện & nạp điện',
            power_status_label: 'Trạng thái hệ thống nạp điện',
            power_status_normal: '● Đang hoạt động bình thường',
            power_vac_label: 'VAC (Cuộn dây)',
            power_vdc_label: 'VDC (Nạp ra)',
            power_rpm_label: 'RPM (Tốc độ)',
            power_detail_title: 'Chi tiết kiểm tra:',
            power_detail_1: '✅ Điện áp cuộn sạc AC: Bình thường',
            power_detail_2: '✅ Điện áp nạp DC: Trong ngưỡng (13.5V - 15.0V)',
            power_detail_3: '✅ IC Regulator (Cục sạc): Hoạt động tốt',
            power_detail_4: '⚠️ Khuyến nghị: Kiểm tra lại sau 5000km',
            
            // ECU data
            ecu_title: '🔧 Dữ liệu ECU & Cảm biến',
            ecu_engine_speed: 'Tốc độ động cơ',
            ecu_engine_temp: 'Nhiệt độ động cơ',
            ecu_o2_sensor: 'Cảm biến O2',
            ecu_map_sensor: 'MAP Sensor',
            ecu_tps: 'TPS (Bướm ga)',
            ecu_iat: 'IAT (Nhiệt hút)',
            ecu_voltage: 'Điện áp ECU',
            ecu_dtc: 'Mã lỗi (DTC)',
            ecu_no_error: 'Không có lỗi',
            ecu_injection_time: 'Thời gian phun',
            ecu_ignition_angle: 'Góc đánh lửa',
            
            // Auto programming
            prog_title: '🔄 Lập trình tự động',
            prog_programming: 'Đang lập trình ECU...',
            prog_init: 'Khởi tạo kết nối...',
            prog_step1: 'Kết nối ECU...',
            prog_step1_log: '> Kết nối ECU PGM-FI...',
            prog_step2: 'Đọc cấu hình hiện tại...',
            prog_step2_log: '> Đọc ROM: 256KB... OK',
            prog_step3: 'Xác minh phiên bản firmware...',
            prog_step3_log: '> FW Version: 38770-K2V-N01',
            prog_step4: 'Ghi dữ liệu mới...',
            prog_step4_log: '> Ghi dữ liệu tại 0x8000...',
            prog_step5: 'Kiểm tra tính toàn vẹn...',
            prog_step5_log: '> Checksum: 0xA4F2... OK',
            prog_step6: 'Xác nhận lập trình...',
            prog_step6_log: '> Xác nhận ECU phản hồi...',
            prog_step7: '✅ Lập trình hoàn tất!',
            prog_step7_log: '> THÀNH CÔNG! ECU đã được lập trình.',
            prog_success: '✅ Lập trình thành công!',
            
            // RPM Gauge
            rpm_title: '🏍️ Đo tốc độ RPM / ABS / HSTC',
            
            // Honda model diag
            diag_title_suffix: '— Chẩn đoán',
            diag_read_dtc: 'Đọc mã lỗi (DTC)',
            diag_clear_dtc: 'Xóa mã lỗi',
            diag_data_stream: 'Data Stream',
            diag_actuator_test: 'Actuator Test',
            diag_smart_key: 'Smart Key / Immo',
            diag_flash_ecu: 'Nạp firmware ECU',
            diag_read_dtc_action: 'Đọc mã lỗi DTC',
            diag_clear_dtc_action: 'Xóa mã lỗi DTC',
            diag_data_stream_action: 'Dữ liệu động (Data Stream)',
            diag_actuator_action: 'Kiểm tra cơ cấu chấp hành',
            diag_smart_key_action: 'Smart Key / Immobilizer',
            diag_flash_ecu_action: 'Nạp firmware ECU',
            diag_performing: 'Đang thực hiện: ',
            diag_completed: ' — Hoàn tất ✅',
            
            // DTC results
            dtc_results_title: '🔍 Kết quả đọc mã lỗi',
            dtc_p0131_desc: 'Cảm biến O2 - Điện áp thấp (Bank 1 Sensor 1)',
            dtc_p0131_status: 'Trạng thái: Hiện tại | Lần xuất hiện: 3',
            dtc_p0335_desc: 'Cảm biến vị trí trục khuỷu CKP - Không có tín hiệu',
            dtc_p0335_status: 'Trạng thái: Lưu trữ | Lần xuất hiện: 1',
            dtc_total: 'Tổng cộng: ',
            dtc_count_suffix: ' mã lỗi',
            
            // Settings
            settings_title: '⚙️ Cài đặt',
            settings_connection: 'Kết nối',
            settings_bluetooth: 'Bluetooth',
            settings_auto_connect: 'Tự động kết nối',
            settings_device: 'Thiết bị',
            settings_interface: 'Giao diện',
            settings_brightness: 'Độ sáng màn hình',
            settings_sound: 'Âm thanh',
            settings_language: 'Ngôn ngữ',
            settings_language_value: 'Tiếng Việt',
            settings_system: 'Hệ thống',
            settings_version: 'Phiên bản phần mềm',
            settings_serial: 'Serial Number',
            settings_storage: 'Bộ nhớ đã dùng',
            settings_update: 'Cập nhật',
            settings_update_latest: '✓ Mới nhất',
            
            // Print
            print_title: '🖨️ In dữ liệu',
            print_report_title: 'BÁO CÁO CHẨN ĐOÁN XE',
            print_date: 'Ngày:',
            print_time: 'Giờ:',
            print_device: 'Thiết bị:',
            print_vehicle_info: 'THÔNG TIN XE:',
            print_brand: 'Hãng: Honda',
            print_model: 'Model: Air Blade 125',
            print_vin: 'VIN: MLHJF7410N5100XXX',
            print_year: 'Năm SX: 2020',
            print_results: 'KẾT QUẢ CHẨN ĐOÁN:',
            print_battery_v: 'Điện áp ắc quy: 12.8V ✅',
            print_idle_rpm: 'RPM cầm chừng: 850 RPM ✅',
            print_engine_temp: 'Nhiệt độ động cơ: 82°C ✅',
            print_o2_sensor: 'Cảm biến O2: 0.45V ✅',
            print_dtc: 'Mã lỗi: Không có lỗi ✅',
            print_conclusion: 'KẾT LUẬN:',
            print_conclusion_text: 'Xe hoạt động bình thường.',
            print_technician: 'Kỹ thuật viên:',
            print_btn: '🖨️ In báo cáo',
            
            // Recent actions
            recent_empty_title: 'Chưa có thao tác nào',
            recent_empty_desc: 'Lịch sử thao tác sẽ hiển thị tại đây',
            
            // Lookup page
            lookup_title: 'Tra cứu và tính toán',
        },
        
        en: {
            // Sidebar menu
            menu_diagnostic: 'Diagnostics & Programming',
            menu_recent: 'Recent Actions ...',
            menu_lookup: 'Lookup & Calculation',
            menu_product_info: 'Product Information',
            menu_manufacturer: 'Manufacturer',
            menu_language: 'Language | Ngôn ngữ',
            
            // Status bar
            status_connected: 'Connected successfully!',
            
            // Toast defaults
            toast_success: 'Action successful',
            toast_screenshot: '📸 Screenshot captured!',
            toast_printing: '🖨️ Printing...',
            toast_lang_changed: 'Language changed: ',
            toast_developing: ' — Under development...',
            
            // Nav button titles
            nav_back: 'Back',
            nav_home: 'Home',
            nav_screenshot: 'Screenshot',
            nav_settings: 'Settings',
            nav_print: 'Print Data',
            
            // Diagnostic cards
            card_obd_conn: 'OBD System Connection',
            card_signal_sim: 'Signal Simulation',
            card_battery_check: 'Battery Check',
            card_power_gen: 'Charging System Check',
            card_ecu_sensor: 'ECU & Sensor Check',
            card_auto_prog: 'Auto Programming',
            card_rpm_abs: 'RPM / ABS / HSTC Measurement',
            
            // Language selection
            lang_vi: 'Việt Nam',
            lang_en: 'English',
            
            // OBD Connection simulation
            obd_title: '🔌 OBD Connection',
            obd_searching: 'Searching for device...',
            obd_scanning_bt: 'Scanning Bluetooth...',
            obd_step1_log: '> Scanning Bluetooth port...',
            obd_step1_text: 'Scanning...',
            obd_step1_detail: 'Searching BT devices...',
            obd_step2_log: '> Found: MOTOSCAN-BT-04A2',
            obd_step2_text: 'Device found',
            obd_step2_detail: 'MOTOSCAN-BT-04A2',
            obd_step3_log: '> Bluetooth connection... OK',
            obd_step3_text: 'Connecting...',
            obd_step3_detail: 'Pairing...',
            obd_step4_log: '> Sending ATZ command... OK',
            obd_step4_text: 'Initializing protocol',
            obd_step4_detail: 'Init ELM327...',
            obd_step5_log: '> Protocol: ISO 14230 (K-Line)',
            obd_step5_text: 'Confirming protocol',
            obd_step5_detail: 'ISO 14230-4 KWP',
            obd_step6_log: '> Reading VIN: MLHJF7410N5100XXX',
            obd_step6_text: 'Reading VIN',
            obd_step6_detail: 'VIN OK',
            obd_step7_log: '> ECU response: Honda FI - PGM-FI',
            obd_step7_text: '✅ Connected successfully!',
            obd_step7_detail: 'Honda PGM-FI ECU Ready',
            
            // Signal waveform
            signal_title: '📡 Signal Simulation - CKP Sensor',
            signal_freq: 'Hz (Frequency)',
            signal_volt: 'Vpp (Amplitude)',
            signal_type: 'Signal Type',
            signal_status: 'Status',
            
            // Battery check
            battery_title: '🔋 Battery Check',
            battery_dc_label: 'Battery Voltage (DC)',
            battery_good: '✅ Battery Good',
            battery_warning: '⚠️ Needs Charging',
            battery_danger: '❌ Battery Weak',
            battery_capacity: 'Capacity',
            battery_charge_current: 'Charge Current',
            battery_temperature: 'Temperature',
            
            // Power gen
            power_title: '⚡ Charging System Check',
            power_status_label: 'Charging System Status',
            power_status_normal: '● Operating normally',
            power_vac_label: 'VAC (Stator Coil)',
            power_vdc_label: 'VDC (Output)',
            power_rpm_label: 'RPM (Speed)',
            power_detail_title: 'Check Details:',
            power_detail_1: '✅ AC Stator Voltage: Normal',
            power_detail_2: '✅ DC Charging Voltage: In range (13.5V - 15.0V)',
            power_detail_3: '✅ IC Regulator: Working properly',
            power_detail_4: '⚠️ Recommendation: Re-check after 5000km',
            
            // ECU data
            ecu_title: '🔧 ECU & Sensor Data',
            ecu_engine_speed: 'Engine Speed',
            ecu_engine_temp: 'Engine Temperature',
            ecu_o2_sensor: 'O2 Sensor',
            ecu_map_sensor: 'MAP Sensor',
            ecu_tps: 'TPS (Throttle)',
            ecu_iat: 'IAT (Intake Air Temp)',
            ecu_voltage: 'ECU Voltage',
            ecu_dtc: 'Error Code (DTC)',
            ecu_no_error: 'No errors',
            ecu_injection_time: 'Injection Time',
            ecu_ignition_angle: 'Ignition Angle',
            
            // Auto programming
            prog_title: '🔄 Auto Programming',
            prog_programming: 'Programming ECU...',
            prog_init: 'Initializing connection...',
            prog_step1: 'Connecting ECU...',
            prog_step1_log: '> Connecting ECU PGM-FI...',
            prog_step2: 'Reading current config...',
            prog_step2_log: '> Reading ROM: 256KB... OK',
            prog_step3: 'Verifying firmware version...',
            prog_step3_log: '> FW Version: 38770-K2V-N01',
            prog_step4: 'Writing new data...',
            prog_step4_log: '> Writing data at 0x8000...',
            prog_step5: 'Integrity check...',
            prog_step5_log: '> Checksum: 0xA4F2... OK',
            prog_step6: 'Confirming programming...',
            prog_step6_log: '> Confirming ECU response...',
            prog_step7: '✅ Programming complete!',
            prog_step7_log: '> SUCCESS! ECU has been programmed.',
            prog_success: '✅ Programming successful!',
            
            // RPM Gauge
            rpm_title: '🏍️ RPM / ABS / HSTC Measurement',
            
            // Honda model diag
            diag_title_suffix: '— Diagnostics',
            diag_read_dtc: 'Read DTC',
            diag_clear_dtc: 'Clear DTC',
            diag_data_stream: 'Data Stream',
            diag_actuator_test: 'Actuator Test',
            diag_smart_key: 'Smart Key / Immo',
            diag_flash_ecu: 'Flash ECU Firmware',
            diag_read_dtc_action: 'Read DTC',
            diag_clear_dtc_action: 'Clear DTC',
            diag_data_stream_action: 'Live Data Stream',
            diag_actuator_action: 'Actuator Test',
            diag_smart_key_action: 'Smart Key / Immobilizer',
            diag_flash_ecu_action: 'Flash ECU Firmware',
            diag_performing: 'Performing: ',
            diag_completed: ' — Completed ✅',
            
            // DTC results
            dtc_results_title: '🔍 DTC Read Results',
            dtc_p0131_desc: 'O2 Sensor - Low Voltage (Bank 1 Sensor 1)',
            dtc_p0131_status: 'Status: Current | Occurrences: 3',
            dtc_p0335_desc: 'Crankshaft Position Sensor CKP - No Signal',
            dtc_p0335_status: 'Status: Stored | Occurrences: 1',
            dtc_total: 'Total: ',
            dtc_count_suffix: ' error codes',
            
            // Settings
            settings_title: '⚙️ Settings',
            settings_connection: 'Connection',
            settings_bluetooth: 'Bluetooth',
            settings_auto_connect: 'Auto Connect',
            settings_device: 'Device',
            settings_interface: 'Interface',
            settings_brightness: 'Screen Brightness',
            settings_sound: 'Sound',
            settings_language: 'Language',
            settings_language_value: 'English',
            settings_system: 'System',
            settings_version: 'Software Version',
            settings_serial: 'Serial Number',
            settings_storage: 'Storage Used',
            settings_update: 'Update',
            settings_update_latest: '✓ Up to date',
            
            // Print
            print_title: '🖨️ Print Data',
            print_report_title: 'VEHICLE DIAGNOSTIC REPORT',
            print_date: 'Date:',
            print_time: 'Time:',
            print_device: 'Device:',
            print_vehicle_info: 'VEHICLE INFORMATION:',
            print_brand: 'Brand: Honda',
            print_model: 'Model: Air Blade 125',
            print_vin: 'VIN: MLHJF7410N5100XXX',
            print_year: 'Year: 2020',
            print_results: 'DIAGNOSTIC RESULTS:',
            print_battery_v: 'Battery Voltage: 12.8V ✅',
            print_idle_rpm: 'Idle RPM: 850 RPM ✅',
            print_engine_temp: 'Engine Temp: 82°C ✅',
            print_o2_sensor: 'O2 Sensor: 0.45V ✅',
            print_dtc: 'DTC: No errors ✅',
            print_conclusion: 'CONCLUSION:',
            print_conclusion_text: 'Vehicle operating normally.',
            print_technician: 'Technician:',
            print_btn: '🖨️ Print Report',
            
            // Recent actions
            recent_empty_title: 'No recent actions',
            recent_empty_desc: 'Action history will be displayed here',
            
            // Lookup page
            lookup_title: 'Lookup & Calculation',
        }
    },
    
    /**
     * Get translated text by key
     * @param {string} key - Translation key
     * @returns {string} Translated text
     */
    t(key) {
        const lang = this.translations[this.currentLang];
        return (lang && lang[key]) || key;
    },
    
    /**
     * Set current language and refresh UI
     * @param {string} lang - Language code ('vi' or 'en')
     */
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('motoscan_lang', lang);
            this.refreshUI();
        }
    },
    
    /**
     * Initialize i18n - load saved language from localStorage
     */
    init() {
        const saved = localStorage.getItem('motoscan_lang');
        if (saved && this.translations[saved]) {
            this.currentLang = saved;
        }
    },
    
    /**
     * Refresh all UI elements with current language
     */
    refreshUI() {
        // Update sidebar menu items
        const menuItems = document.querySelectorAll('.menu-item');
        const menuKeys = ['menu_diagnostic', 'menu_recent', 'menu_lookup', 'menu_product_info', 'menu_manufacturer', 'menu_language'];
        menuItems.forEach((item, index) => {
            if (menuKeys[index]) {
                // Preserve the icon span, update only text
                const iconSpan = item.querySelector('.icon');
                if (iconSpan) {
                    item.innerHTML = '';
                    item.appendChild(iconSpan);
                    item.appendChild(document.createTextNode(' ' + this.t(menuKeys[index])));
                }
            }
        });
        
        // Update nav button titles
        const navBtns = document.querySelectorAll('.nav-btn');
        const navTitles = ['nav_back', 'nav_home', 'nav_screenshot', 'nav_settings', 'nav_print'];
        navBtns.forEach((btn, index) => {
            if (navTitles[index]) {
                btn.title = this.t(navTitles[index]);
            }
        });
        
        // Update status bar
        const statusText = document.getElementById('statusText');
        if (statusText) statusText.textContent = this.t('status_connected');
        
        // Update settings language value in popup if open
        const settingsLangValue = document.querySelector('.settings-value[data-i18n="settings_language_value"]');
        if (settingsLangValue) {
            settingsLangValue.textContent = this.t('settings_language_value');
        }
        
        // Reload current view to update card titles
        if (typeof loadView === 'function' && typeof currentView !== 'undefined') {
            loadView(currentView);
        }
    }
};
