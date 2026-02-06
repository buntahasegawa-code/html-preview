// ダミーデータ
const dummyData = {
    // 月別データ（6ヶ月分：7月から12月）
    months: ['7月', '8月', '9月', '10月', '11月', '12月'],
    genaiIntroductionMonth: -1, // GenAI導入月は表示期間外（4月）
    
    // KGI: 売上推移（目標含む）
    revenue: {
        actual: [125000000, 132000000, 128000000, 135000000, 142000000, 148000000],
        target: [150000000, 152000000, 154000000, 156000000, 158000000, 160000000] // ギリギリ到達できない目標
    },
    
    // 主要KPI（現在値）
    currentKPI: {
        sessions: 255000,
        bounceRate: 45.2,
        pageViews: 1224000, // PV数（総数）
        avgPageViews: 4.8, // 平均PV数
        searchCount: 137000, // 検索数（総数）
        avgSearchCount: 2.3, // 平均検索数
        clickCount: 48500,
        clickRate: 19.0,
        purchaseAmount: 81200000,
        purchaseRate: 3.8,
        purchasePrice: 11200,
        repeatRate: 28.5, // リピート率
        repeatCustomers: 72800, // リピート購入者数
        customerLTV: 145000, // 顧客単価（LTV）
        avgCustomerLTV: 18500 // 平均顧客単価
    },
    
    // 閲覧数推移（検索経路別）
    pageViewsTrend: {
        noSearch: [118000, 115000, 112000, 110000, 108000, 105000],
        normalSearch: [75000, 73000, 70000, 68000, 65000, 63000],
        aiSearch: [62000, 68000, 72000, 75000, 78000, 80000]
    },
    
    // 平均閲覧数推移（検索経路別）
    avgPageViewsTrend: {
        noSearch: [3.1, 3.2, 3.3, 3.2, 3.1, 3.2],
        normalSearch: [4.8, 4.9, 5.0, 4.9, 5.0, 5.1],
        aiSearch: [7.0, 7.1, 7.2, 7.3, 7.4, 7.5]
    },
    
    // 検索数推移（検索経路別）
    searchCountTrend: {
        noSearch: [0, 0, 0, 0, 0, 0],
        normalSearch: [75000, 73000, 70000, 68000, 65000, 63000],
        aiSearch: [62000, 68000, 72000, 75000, 78000, 80000]
    },
    
    // 平均検索数推移（検索経路別）
    avgSearchCountTrend: {
        noSearch: [0, 0, 0, 0, 0, 0],
        normalSearch: [1.5, 1.6, 1.6, 1.7, 1.7, 1.8],
        aiSearch: [2.4, 2.5, 2.6, 2.7, 2.8, 2.9]
    },
    
    // クリック数推移（検索経路別）
    clickCountTrend: {
        noSearch: [14616, 14720, 14784, 14080, 13392, 13440],
        normalSearch: [14400, 14016, 14000, 13600, 13000, 12852],
        aiSearch: [14880, 17000, 18720, 20250, 21840, 23200]
    },
    
    // クリック率推移（検索経路別）
    clickRateTrend: {
        noSearch: [12.4, 12.8, 13.2, 12.8, 12.4, 12.8],
        normalSearch: [19.2, 19.2, 20.0, 20.0, 20.0, 20.4],
        aiSearch: [24.0, 25.0, 26.0, 27.0, 28.0, 29.0]
    },
    
    // 購買率推移（検索経路別）
    purchaseRateTrend: {
        noSearch: [2.0, 2.1, 2.1, 2.0, 2.1, 2.1],
        normalSearch: [3.8, 3.9, 4.0, 4.0, 4.0, 4.1],
        aiSearch: [6.0, 6.2, 6.4, 6.5, 6.6, 6.8]
    },
    
    // 購買単価推移（検索経路別）
    purchasePriceTrend: {
        noSearch: [8400, 8600, 8700, 8500, 8600, 8700],
        normalSearch: [9100, 9300, 9400, 9300, 9400, 9500],
        aiSearch: [11300, 11400, 11500, 11600, 11700, 11800]
    },
    
    // AI検索利用率推移（GenAI導入前後：12ヶ月分）
    aiSearchUsage: {
        before: {
            normalSearch: [100, 100, 100], // 1-3月（ほぼ一定）
            aiSearch: [0, 0, 0] // 1-3月
        },
        after: {
            normalSearch: [65, 65, 65, 65, 65, 65, 65, 65, 65], // 4-12月（ほぼ一定）
            aiSearch: [35, 39, 42, 45, 48, 50, 52, 54, 56] // 4-12月
        }
    },
    
    // 0件ヒット時の離脱率（GenAI導入前後：12ヶ月分）
    zeroHitBounceRate: {
        before: [68.5, 69.2, 70.1], // 1-3月
        after: [47.2, 46.8, 47.1, 46.5, 46.0, 45.8, 45.5, 45.2, 45.0] // 4-12月
    },
    
    // GenAI導入前後の月データ（12ヶ月分）
    genaiMonths: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    genaiIntroductionMonthIndex: 3, // 4月（0ベース）
    
    // 検索ワードの平均文字数・単語数（検索経路別）
    searchWordLength: {
        normalSearch: {
            avgChars: [8.2, 8.3, 8.4, 8.3, 8.4, 8.5],
            avgWords: [2.1, 2.1, 2.2, 2.1, 2.2, 2.2]
        },
        aiSearch: {
            avgChars: [15.8, 16.2, 16.5, 16.8, 17.1, 17.4],
            avgWords: [4.2, 4.3, 4.4, 4.5, 4.6, 4.7]
        }
    },
    
    // 0件検索時のAIレコメンドのCTR（GenAI導入前後：12ヶ月分）
    zeroHitAICTR: {
        before: [0, 0, 0], // 1-3月（GenAI導入前）
        after: [12.5, 13.2, 13.8, 14.2, 14.6, 15.0, 15.3, 15.5, 15.8] // 4-12月
    },
    
    // FB数（グッドマーク・バッドマーク）（GenAI導入前後：12ヶ月分）
    feedback: {
        good: {
            before: [0, 0, 0], // 1-3月
            after: [850, 920, 880, 950, 910, 980, 940, 1000, 960] // 4-12月（上下動）
        },
        bad: {
            before: [0, 0, 0], // 1-3月
            after: [420, 450, 480, 440, 470, 500, 460, 490, 520] // 4-12月（バッドマークの割合を多く、上下動）
        }
    },
    
    // 別カテゴリ商品レコメンド購買率（GenAI導入前後：12ヶ月分）
    crossCategoryPurchaseRate: {
        before: [0, 0, 0], // 1-3月（GenAI導入前は0）
        after: [4.8, 5.2, 5.5, 5.8, 6.1, 6.4, 6.6, 6.8, 7.0] // 4-12月
    },
    
    // 検索ワード別の検索数、CTR、CVR（ランキング用）- より曖昧で文字数が多いワード
    searchWordRanking: [
        { word: '肌の調子が悪い時に使える優しい成分のコスメティック商品', searchCount: 12500, ctr: 28.5, cvr: 6.8 },
        { word: 'プレゼントとして贈りたいけど何がいいかわからない時に選べるもの', searchCount: 11200, ctr: 26.2, cvr: 7.2 },
        { word: 'おしゃれだけど実用的で毎日使えるようなバッグや小物', searchCount: 9800, ctr: 24.8, cvr: 5.9 },
        { word: '年齢を重ねても使い続けられるような高品質なファッションアイテム', searchCount: 9200, ctr: 22.1, cvr: 6.1 },
        { word: '初心者でも簡単に使えて効果が実感できるような家電製品', searchCount: 8500, ctr: 25.3, cvr: 5.5 },
        { word: '敏感肌の人でも安心して使えるようなスキンケア商品', searchCount: 7800, ctr: 23.7, cvr: 6.3 },
        { word: '特別な日に着たいような上品でエレガントな服装', searchCount: 7200, ctr: 27.1, cvr: 7.5 },
        { word: '忙しい毎日でも手軽にケアできるような美容グッズ', searchCount: 6800, ctr: 21.4, cvr: 5.2 },
        { word: '長く愛用できるようなデザインと機能性を兼ね備えたアイテム', searchCount: 6500, ctr: 24.6, cvr: 6.0 },
        { word: '環境に配慮しながらもおしゃれに使えるようなエコな商品', searchCount: 6200, ctr: 26.8, cvr: 6.7 }
    ]
};

// Chart.jsのデフォルト設定
Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.color = '#666';

// カラーパレット
const colors = {
    primary: '#667eea',
    secondary: '#764ba2',
    success: '#4caf50',
    warning: '#ff9800',
    danger: '#f44336',
    info: '#2196f3',
    genai: '#00bcd4',
    normal: '#9e9e9e',
    noSearch: '#607d8b',
    target: '#ff9800'
};

// GenAI導入月を示すプラグイン
const introductionMonthPlugin = {
    id: 'introductionMonth',
    afterDraw: (chart) => {
        const ctx = chart.ctx;
        const chartArea = chart.chartArea;
        const meta = chart.getDatasetMeta(0);
        const introductionIndex = dummyData.genaiIntroductionMonthIndex;
        
        // チャートのラベルが12ヶ月分（genaiMonths）の場合のみ表示
        if (chart.data.labels && chart.data.labels.length === 12 && introductionIndex >= 0 && meta.data[introductionIndex]) {
            const x = meta.data[introductionIndex].x;
            
            ctx.save();
            ctx.strokeStyle = colors.warning;
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(x, chartArea.top);
            ctx.lineTo(x, chartArea.bottom);
            ctx.stroke();
            ctx.restore();
        }
    }
};

// フィルタ処理
let currentFilters = {
    period: 'all',
    category: 'all',
    device: 'all'
};

function getFilteredData(data, filterType = 'period') {
    // 簡易実装：実際のフィルタリングロジックは必要に応じて拡張
    return data;
}

function updateFilters(section) {
    if (section === 1) {
        currentFilters.period = document.getElementById('periodFilter1').value;
        currentFilters.category = document.getElementById('categoryFilter1').value;
        currentFilters.device = document.getElementById('deviceFilter1').value;
    } else if (section === 2) {
        currentFilters.period = document.getElementById('periodFilter2').value;
        currentFilters.category = document.getElementById('categoryFilter2').value;
        currentFilters.device = document.getElementById('deviceFilter2').value;
    } else if (section === 3) {
        currentFilters.period = document.getElementById('periodFilter3').value;
        currentFilters.category = document.getElementById('categoryFilter3').value;
        currentFilters.device = document.getElementById('deviceFilter3').value;
        const searchPathSelect = document.getElementById('searchPathFilter3');
        currentFilters.searchPath = Array.from(searchPathSelect.selectedOptions).map(opt => opt.value);
    } else if (section === 4) {
        currentFilters.period = document.getElementById('periodFilter4').value;
        currentFilters.device = document.getElementById('deviceFilter4').value;
    }
    
    // フィルタ変更時にチャートを更新
    updateAllCharts();
}

// フィルタイベントリスナー（各セクションごと）
document.getElementById('periodFilter1').addEventListener('change', () => updateFilters(1));
document.getElementById('categoryFilter1').addEventListener('change', () => updateFilters(1));
document.getElementById('deviceFilter1').addEventListener('change', () => updateFilters(1));

document.getElementById('periodFilter2').addEventListener('change', () => updateFilters(2));
document.getElementById('categoryFilter2').addEventListener('change', () => updateFilters(2));
document.getElementById('deviceFilter2').addEventListener('change', () => updateFilters(2));

document.getElementById('periodFilter3').addEventListener('change', () => updateFilters(3));
document.getElementById('categoryFilter3').addEventListener('change', () => updateFilters(3));
document.getElementById('deviceFilter3').addEventListener('change', () => updateFilters(3));

document.getElementById('periodFilter4').addEventListener('change', () => updateFilters(4));
document.getElementById('deviceFilter4').addEventListener('change', () => updateFilters(4));

// 検索経路フィルタのイベントリスナー（ドロップダウンで開閉）
const searchPathFilter = document.getElementById('searchPathFilter3');
const searchPathRadioContainer = document.getElementById('searchPathRadioContainer');
if (searchPathFilter && searchPathRadioContainer) {
    // selectをクリックした時にラジオボタンコンテナを表示
    searchPathFilter.addEventListener('focus', () => {
        searchPathRadioContainer.style.display = 'block';
    });
    
    searchPathFilter.addEventListener('change', (e) => {
        // 「全て」を選択した場合はラジオボタンコンテナを非表示
        if (e.target.value === 'all') {
            searchPathRadioContainer.style.display = 'none';
            // 「全て」のラジオボタンを選択
            document.querySelector('input[name="searchPathRadio"][value="all"]').checked = true;
        } else {
            searchPathRadioContainer.style.display = 'block';
        }
    });
    
    // ラジオボタンの変更イベント
    document.querySelectorAll('input[name="searchPathRadio"]').forEach(radio => {
        radio.addEventListener('change', () => {
            updateFilters(3);
            // ラジオボタンで選択した値をselectに反映
            searchPathFilter.value = radio.value;
            if (radio.value === 'all') {
                searchPathRadioContainer.style.display = 'none';
            }
        });
    });
}

// 検索ワード用の検索経路フィルタ
const searchPathFilterSearchWord = document.getElementById('searchPathFilterSearchWord');
const searchPathRadioContainerSearchWord = document.getElementById('searchPathRadioContainerSearchWord');
if (searchPathFilterSearchWord && searchPathRadioContainerSearchWord) {
    // selectをクリックした時にラジオボタンコンテナを表示
    searchPathFilterSearchWord.addEventListener('focus', () => {
        searchPathRadioContainerSearchWord.style.display = 'block';
    });
    
    searchPathFilterSearchWord.addEventListener('change', (e) => {
        // 「全て」を選択した場合はラジオボタンコンテナを非表示
        if (e.target.value === 'all') {
            searchPathRadioContainerSearchWord.style.display = 'none';
            // 「全て」のラジオボタンを選択
            document.querySelector('input[name="searchPathRadioSearchWord"][value="all"]').checked = true;
        } else {
            searchPathRadioContainerSearchWord.style.display = 'block';
        }
    });
    
    // ラジオボタンの変更イベント
    document.querySelectorAll('input[name="searchPathRadioSearchWord"]').forEach(radio => {
        radio.addEventListener('change', () => {
            // 検索ワードランキングテーブルを更新
            initSearchWordRankingTable();
            // ラジオボタンで選択した値をselectに反映
            searchPathFilterSearchWord.value = radio.value;
            if (radio.value === 'all') {
                searchPathRadioContainerSearchWord.style.display = 'none';
            }
        });
    });
}

// 0件ヒット時の離脱率用フィルタ
const periodFilterZeroHit = document.getElementById('periodFilterZeroHit');
const deviceFilterZeroHit = document.getElementById('deviceFilterZeroHit');
if (periodFilterZeroHit) {
    periodFilterZeroHit.addEventListener('change', () => {
        // チャートを更新
        console.log('0件ヒット時の離脱率フィルタ更新');
    });
}
if (deviceFilterZeroHit) {
    deviceFilterZeroHit.addEventListener('change', () => {
        // チャートを更新
        console.log('0件ヒット時の離脱率フィルタ更新');
    });
}

// 検索ワード用フィルタ
const periodFilterSearchWord = document.getElementById('periodFilterSearchWord');
const deviceFilterSearchWord = document.getElementById('deviceFilterSearchWord');
if (periodFilterSearchWord) {
    periodFilterSearchWord.addEventListener('change', () => {
        initSearchWordRankingTable();
    });
}
if (deviceFilterSearchWord) {
    deviceFilterSearchWord.addEventListener('change', () => {
        initSearchWordRankingTable();
    });
}

// 数値フォーマット関数
function formatNumber(num) {
    return num.toLocaleString('ja-JP');
}

function formatCurrency(num) {
    return '¥' + num.toLocaleString('ja-JP');
}

// 1. KGI推移: 売上推移チャート
let revenueChart;
function initRevenueChart() {
    const ctx = document.getElementById('revenueChart').getContext('2d');
    revenueChart = new Chart(ctx, {
        type: 'line',
        plugins: [introductionMonthPlugin],
        data: {
            labels: dummyData.months,
            datasets: [
                {
                    label: '実績',
                    data: dummyData.revenue.actual,
                    borderColor: colors.primary,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    pointBackgroundColor: colors.primary,
                    tension: 0.4
                },
                {
                    label: '目標',
                    data: dummyData.revenue.target,
                    borderColor: colors.target,
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    pointRadius: 4,
                    pointBackgroundColor: colors.target,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 15
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + formatCurrency(context.parsed.y);
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return formatCurrency(value);
                        }
                    },
                    title: {
                        display: true,
                        text: '売上金額 (円)'
                    }
                }
            }
        }
    });
}

// 2. ファネル別KPI状況（ファネル表示）
function updateFunnelValues() {
    document.getElementById('sessionValue').textContent = formatNumber(dummyData.currentKPI.sessions);
    document.getElementById('bounceRateValue').textContent = dummyData.currentKPI.bounceRate.toFixed(1) + '%';
    document.getElementById('pageViewsValue').textContent = formatNumber(dummyData.currentKPI.pageViews) + '回';
    document.getElementById('avgPageViewsValue').textContent = '（' + dummyData.currentKPI.avgPageViews.toFixed(1) + '回）';
    document.getElementById('searchCountValue').textContent = formatNumber(dummyData.currentKPI.searchCount) + '回';
    document.getElementById('avgSearchCountValue').textContent = '（' + dummyData.currentKPI.avgSearchCount.toFixed(1) + '回）';
    document.getElementById('clickCountValue').textContent = formatNumber(dummyData.currentKPI.clickCount) + '回';
    document.getElementById('clickRateValue').textContent = '（' + dummyData.currentKPI.clickRate.toFixed(1) + '%）';
    document.getElementById('purchaseAmountValue').textContent = formatCurrency(dummyData.currentKPI.purchaseAmount);
    document.getElementById('purchaseRateAndPriceValue').textContent = '（' + dummyData.currentKPI.purchaseRate.toFixed(1) + '%, ' + formatCurrency(dummyData.currentKPI.purchasePrice) + '）';
}

// 3. 主要KPIの検索経路別推移チャート
let pageViewsTrendChart, avgPageViewsTrendChart, searchCountTrendChart, avgSearchCountTrendChart;
let clickCountTrendChart, clickRateTrendChart, purchaseRateTrendChart, purchasePriceTrendChart;

function initTrendCharts() {
    // 閲覧数推移
    const pageViewsCtx = document.getElementById('pageViewsTrendChart').getContext('2d');
    pageViewsTrendChart = new Chart(pageViewsCtx, {
        type: 'line',
        plugins: [introductionMonthPlugin],
        data: {
            labels: dummyData.months,
            datasets: [
                {
                    label: '未検索',
                    data: dummyData.pageViewsTrend.noSearch,
                    borderColor: colors.noSearch,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                },
                {
                    label: '普通検索',
                    data: dummyData.pageViewsTrend.normalSearch,
                    borderColor: colors.normal,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                },
                {
                    label: 'AI検索',
                    data: dummyData.pageViewsTrend.aiSearch,
                    borderColor: colors.genai,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4,
                    spanGaps: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            if (context.parsed.y === null) return null;
                            return context.dataset.label + ': ' + formatNumber(context.parsed.y);
                        },
                        filter: function(tooltipItem) {
                            return tooltipItem.parsed.y !== null;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false } },
                y: {
                    beginAtZero: true,
                    ticks: { callback: (v) => formatNumber(v) },
                    title: { display: true, text: 'PV数' }
                }
            }
        }
    });

    // 平均閲覧数推移
    const avgPageViewsCtx = document.getElementById('avgPageViewsTrendChart').getContext('2d');
    avgPageViewsTrendChart = new Chart(avgPageViewsCtx, {
        type: 'line',
        plugins: [introductionMonthPlugin],
        data: {
            labels: dummyData.months,
            datasets: [
                {
                    label: '未検索',
                    data: dummyData.avgPageViewsTrend.noSearch,
                    borderColor: colors.noSearch,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                },
                {
                    label: '普通検索',
                    data: dummyData.avgPageViewsTrend.normalSearch,
                    borderColor: colors.normal,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                },
                {
                    label: 'AI検索',
                    data: dummyData.avgPageViewsTrend.aiSearch,
                    borderColor: colors.genai,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4,
                    spanGaps: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            if (context.parsed.y === null) return null;
                            return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + '回';
                        },
                        filter: function(tooltipItem) {
                            return tooltipItem.parsed.y !== null;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false } },
                y: {
                    beginAtZero: true,
                    ticks: { callback: (v) => v.toFixed(1) + '回' },
                    title: { display: true, text: '平均PV数' }
                }
            }
        }
    });

    // 検索数推移
    const searchCountCtx = document.getElementById('searchCountTrendChart').getContext('2d');
    searchCountTrendChart = new Chart(searchCountCtx, {
        type: 'line',
        plugins: [introductionMonthPlugin],
        data: {
            labels: dummyData.months,
            datasets: [
                {
                    label: '未検索',
                    data: dummyData.searchCountTrend.noSearch,
                    borderColor: colors.noSearch,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                },
                {
                    label: '普通検索',
                    data: dummyData.searchCountTrend.normalSearch,
                    borderColor: colors.normal,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                },
                {
                    label: 'AI検索',
                    data: dummyData.searchCountTrend.aiSearch,
                    borderColor: colors.genai,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4,
                    spanGaps: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            if (context.parsed.y === null) return null;
                            return context.dataset.label + ': ' + formatNumber(context.parsed.y);
                        },
                        filter: function(tooltipItem) {
                            return tooltipItem.parsed.y !== null;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false } },
                y: {
                    beginAtZero: true,
                    ticks: { callback: (v) => formatNumber(v) },
                    title: { display: true, text: '検索数' }
                }
            }
        }
    });

    // 平均検索数推移
    const avgSearchCountCtx = document.getElementById('avgSearchCountTrendChart').getContext('2d');
    avgSearchCountTrendChart = new Chart(avgSearchCountCtx, {
        type: 'line',
        plugins: [introductionMonthPlugin],
        data: {
            labels: dummyData.months,
            datasets: [
                {
                    label: '未検索',
                    data: dummyData.avgSearchCountTrend.noSearch,
                    borderColor: colors.noSearch,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                },
                {
                    label: '普通検索',
                    data: dummyData.avgSearchCountTrend.normalSearch,
                    borderColor: colors.normal,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                },
                {
                    label: 'AI検索',
                    data: dummyData.avgSearchCountTrend.aiSearch,
                    borderColor: colors.genai,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4,
                    spanGaps: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            if (context.parsed.y === null) return null;
                            return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + '回';
                        },
                        filter: function(tooltipItem) {
                            return tooltipItem.parsed.y !== null;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false } },
                y: {
                    beginAtZero: true,
                    ticks: { callback: (v) => v.toFixed(1) + '回' },
                    title: { display: true, text: '平均検索数' }
                }
            }
        }
    });

    // クリック数推移
    const clickCountCtx = document.getElementById('clickCountTrendChart').getContext('2d');
    clickCountTrendChart = new Chart(clickCountCtx, {
        type: 'line',
        plugins: [introductionMonthPlugin],
        data: {
            labels: dummyData.months,
            datasets: [
                {
                    label: '未検索',
                    data: dummyData.clickCountTrend.noSearch,
                    borderColor: colors.noSearch,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                },
                {
                    label: '普通検索',
                    data: dummyData.clickCountTrend.normalSearch,
                    borderColor: colors.normal,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                },
                {
                    label: 'AI検索',
                    data: dummyData.clickCountTrend.aiSearch,
                    borderColor: colors.genai,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4,
                    spanGaps: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            if (context.parsed.y === null) return null;
                            return context.dataset.label + ': ' + formatNumber(context.parsed.y);
                        },
                        filter: function(tooltipItem) {
                            return tooltipItem.parsed.y !== null;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false } },
                y: {
                    beginAtZero: true,
                    ticks: { callback: (v) => formatNumber(v) },
                    title: { display: true, text: 'クリック数' }
                }
            }
        }
    });

    // クリック率推移
    const clickRateCtx = document.getElementById('clickRateTrendChart').getContext('2d');
    clickRateTrendChart = new Chart(clickRateCtx, {
        type: 'line',
        plugins: [introductionMonthPlugin],
        data: {
            labels: dummyData.months,
            datasets: [
                {
                    label: '未検索',
                    data: dummyData.clickRateTrend.noSearch,
                    borderColor: colors.noSearch,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                },
                {
                    label: '普通検索',
                    data: dummyData.clickRateTrend.normalSearch,
                    borderColor: colors.normal,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                },
                {
                    label: 'AI検索',
                    data: dummyData.clickRateTrend.aiSearch,
                    borderColor: colors.genai,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4,
                    spanGaps: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            if (context.parsed.y === null) return null;
                            return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + '%';
                        },
                        filter: function(tooltipItem) {
                            return tooltipItem.parsed.y !== null;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false } },
                y: {
                    beginAtZero: true,
                    ticks: { callback: (v) => v.toFixed(1) + '%' },
                    title: { display: true, text: 'クリック率 (%)' }
                }
            }
        }
    });

    // 購買率推移
    const purchaseRateCtx = document.getElementById('purchaseRateTrendChart').getContext('2d');
    purchaseRateTrendChart = new Chart(purchaseRateCtx, {
        type: 'line',
        plugins: [introductionMonthPlugin],
        data: {
            labels: dummyData.months,
            datasets: [
                {
                    label: '未検索',
                    data: dummyData.purchaseRateTrend.noSearch,
                    borderColor: colors.noSearch,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                },
                {
                    label: '普通検索',
                    data: dummyData.purchaseRateTrend.normalSearch,
                    borderColor: colors.normal,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                },
                {
                    label: 'AI検索',
                    data: dummyData.purchaseRateTrend.aiSearch,
                    borderColor: colors.genai,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4,
                    spanGaps: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            if (context.parsed.y === null) return null;
                            return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + '%';
                        },
                        filter: function(tooltipItem) {
                            return tooltipItem.parsed.y !== null;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false } },
                y: {
                    beginAtZero: true,
                    ticks: { callback: (v) => v.toFixed(1) + '%' },
                    title: { display: true, text: '購買率 (%)' }
                }
            }
        }
    });

    // 購買単価推移
    const purchasePriceCtx = document.getElementById('purchasePriceTrendChart').getContext('2d');
    purchasePriceTrendChart = new Chart(purchasePriceCtx, {
        type: 'line',
        plugins: [introductionMonthPlugin],
        data: {
            labels: dummyData.months,
            datasets: [
                {
                    label: '未検索',
                    data: dummyData.purchasePriceTrend.noSearch,
                    borderColor: colors.noSearch,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                },
                {
                    label: '普通検索',
                    data: dummyData.purchasePriceTrend.normalSearch,
                    borderColor: colors.normal,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                },
                {
                    label: 'AI検索',
                    data: dummyData.purchasePriceTrend.aiSearch,
                    borderColor: colors.genai,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4,
                    spanGaps: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            if (context.parsed.y === null) return null;
                            return context.dataset.label + ': ' + formatCurrency(context.parsed.y);
                        },
                        filter: function(tooltipItem) {
                            return tooltipItem.parsed.y !== null;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false } },
                y: {
                    beginAtZero: false,
                    ticks: { callback: (v) => formatCurrency(v) },
                    title: { display: true, text: '購買単価 (円)' }
                }
            }
        }
    });
}

// 0件ヒット時の離脱率チャート（主要KPIの検索経路別推移セクションに追加）
let zeroHitBounceRateChart;
function initZeroHitBounceRateChart() {
    const zeroHitCtx = document.getElementById('zeroHitBounceRateChart').getContext('2d');
    const genaiLabels = dummyData.genaiMonths;
    const beforeBounce = dummyData.zeroHitBounceRate.before;
    const afterBounce = dummyData.zeroHitBounceRate.after;
    const allBefore = [...beforeBounce, ...Array(9).fill(null)];
    const allAfter = [...Array(3).fill(null), ...afterBounce];
    
    zeroHitBounceRateChart = new Chart(zeroHitCtx, {
        type: 'line',
        plugins: [introductionMonthPlugin],
        data: {
            labels: genaiLabels,
            datasets: [
                {
                    label: 'GenAI導入前',
                    data: allBefore,
                    borderColor: colors.danger,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4,
                    spanGaps: false
                },
                {
                    label: 'GenAI導入後',
                    data: allAfter,
                    borderColor: colors.success,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4,
                    spanGaps: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            if (context.parsed.y === null) return null;
                            return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + '%';
                        },
                        filter: function(tooltipItem) {
                            return tooltipItem.parsed.y !== null;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false } },
                y: {
                    beginAtZero: true,
                    ticks: { callback: (v) => v.toFixed(1) + '%' },
                    title: { display: true, text: '離脱率 (%)' }
                }
            }
        }
    });
}

// 検索ワードランキングテーブルの初期化と並べ替え機能
let currentSortColumn = null;
let currentSortDirection = 'desc'; // 'asc' or 'desc'

function initSearchWordRankingTable() {
    const tbody = document.getElementById('searchWordRankingBody');
    tbody.innerHTML = '';
    
    // データをコピーして並べ替え
    let sortedData = [...dummyData.searchWordRanking];
    if (currentSortColumn) {
        sortedData.sort((a, b) => {
            const aVal = a[currentSortColumn];
            const bVal = b[currentSortColumn];
            if (currentSortDirection === 'asc') {
                return aVal - bVal;
            } else {
                return bVal - aVal;
            }
        });
    }
    
    sortedData.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.word}</td>
            <td>${formatNumber(item.searchCount)}</td>
            <td>${item.ctr.toFixed(1)}</td>
            <td>${item.cvr.toFixed(1)}</td>
        `;
        tbody.appendChild(row);
    });
    
    // 並べ替え機能のイベントリスナー
    document.querySelectorAll('.sortable').forEach(header => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', () => {
            const sortColumn = header.getAttribute('data-sort');
            if (currentSortColumn === sortColumn) {
                currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                currentSortColumn = sortColumn;
                currentSortDirection = 'desc';
            }
            
            // 全てのソートインジケーターをリセット
            document.querySelectorAll('.sort-indicator').forEach(indicator => {
                indicator.textContent = '↕';
            });
            
            // 現在のソートカラムのインジケーターを更新
            const indicator = header.querySelector('.sort-indicator');
            indicator.textContent = currentSortDirection === 'asc' ? '↑' : '↓';
            
            initSearchWordRankingTable();
        });
    });
}

// 4. GenAI利用状況チャート
let aiSearchUsageChart, searchWordLengthChart, zeroHitAICTRChart, feedbackChart, crossCategoryPurchaseRateChart;

function initGenAICharts() {
    // GenAI導入前後の月データを準備（12ヶ月分）
    const genaiLabels = dummyData.genaiMonths;
    const introductionIndex = dummyData.genaiIntroductionMonthIndex;
    
    // AI検索の利用率変化（導入前後で表示）
    const aiUsageCtx = document.getElementById('aiSearchUsageChart').getContext('2d');
    
    // 導入前のデータ（1-3月）
    const beforeNormal = dummyData.aiSearchUsage.before.normalSearch;
    const beforeAI = dummyData.aiSearchUsage.before.aiSearch;
    // 導入後のデータ（4-12月）
    const afterNormal = dummyData.aiSearchUsage.after.normalSearch;
    const afterAI = dummyData.aiSearchUsage.after.aiSearch;
    
    // 全期間のデータ（1-3月は導入前、4-12月は導入後）
    const allNormal = [...beforeNormal, ...afterNormal];
    const allAI = [...beforeAI, ...afterAI];
    
    aiSearchUsageChart = new Chart(aiUsageCtx, {
        type: 'line',
        plugins: [introductionMonthPlugin],
        data: {
            labels: genaiLabels, // 1-12月
            datasets: [
                {
                    label: '普通検索利用率',
                    data: allNormal,
                    borderColor: colors.normal,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                },
                {
                    label: 'AI検索利用率',
                    data: allAI,
                    borderColor: colors.genai,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + '%';
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false } },
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { callback: (v) => v.toFixed(0) + '%' },
                    title: { display: true, text: '利用率 (%)' }
                }
            }
        }
    });

    // 検索ワードの平均文字数（平均文字数のみ）
    const searchWordCtx = document.getElementById('searchWordLengthChart').getContext('2d');
    searchWordLengthChart = new Chart(searchWordCtx, {
        type: 'line',
        plugins: [introductionMonthPlugin],
        data: {
            labels: dummyData.months,
            datasets: [
                {
                    label: '普通検索（平均文字数）',
                    data: dummyData.searchWordLength.normalSearch.avgChars,
                    borderColor: colors.normal,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                },
                {
                    label: 'AI検索（平均文字数）',
                    data: dummyData.searchWordLength.aiSearch.avgChars,
                    borderColor: colors.genai,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + '文字';
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false } },
                y: {
                    beginAtZero: true,
                    ticks: { callback: (v) => v.toFixed(1) + '文字' },
                    title: { display: true, text: '平均文字数' }
                }
            }
        }
    });

    // 0件検索時のAIレコメンドのCTR
    const zeroHitAICTRCtx = document.getElementById('zeroHitAICTRChart').getContext('2d');
    const beforeCTR = dummyData.zeroHitAICTR.before;
    const afterCTR = dummyData.zeroHitAICTR.after;
    const allBeforeCTR = [...beforeCTR, ...Array(9).fill(null)];
    const allAfterCTR = [...Array(3).fill(null), ...afterCTR];
    
    zeroHitAICTRChart = new Chart(zeroHitAICTRCtx, {
        type: 'line',
        plugins: [introductionMonthPlugin],
        data: {
            labels: genaiLabels,
            datasets: [
                {
                    label: 'GenAI導入前',
                    data: allBeforeCTR,
                    borderColor: colors.danger,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4,
                    spanGaps: false
                },
                {
                    label: 'GenAI導入後',
                    data: allAfterCTR,
                    borderColor: colors.success,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4,
                    spanGaps: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            if (context.parsed.y === null) return null;
                            return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + '%';
                        },
                        filter: function(tooltipItem) {
                            return tooltipItem.parsed.y !== null;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false } },
                y: {
                    beginAtZero: true,
                    ticks: { callback: (v) => v.toFixed(1) + '%' },
                    title: { display: true, text: 'CTR (%)' }
                }
            }
        }
    });

    // FB数（グッドマーク・バッドマーク）- 積み上げ棒グラフ
    const feedbackCtx = document.getElementById('feedbackChart').getContext('2d');
    const beforeGood = dummyData.feedback.good.before;
    const afterGood = dummyData.feedback.good.after;
    const beforeBad = dummyData.feedback.bad.before;
    const afterBad = dummyData.feedback.bad.after;
    const allBeforeGood = [...beforeGood, ...Array(9).fill(null)];
    const allAfterGood = [...Array(3).fill(null), ...afterGood];
    const allBeforeBad = [...beforeBad, ...Array(9).fill(null)];
    const allAfterBad = [...Array(3).fill(null), ...afterBad];
    
    // 導入前後のデータを結合（導入前は1-3月、導入後は4-12月）
    const allGood = allBeforeGood.map((val, idx) => val !== null ? val : allAfterGood[idx]);
    const allBad = allBeforeBad.map((val, idx) => val !== null ? val : allAfterBad[idx]);
    
    feedbackChart = new Chart(feedbackCtx, {
        type: 'bar',
        plugins: [introductionMonthPlugin],
        data: {
            labels: genaiLabels,
            datasets: [
                {
                    label: 'グッドマーク',
                    data: allGood,
                    backgroundColor: colors.success,
                    borderColor: colors.success,
                    borderWidth: 1
                },
                {
                    label: 'バッドマーク',
                    data: allBad,
                    backgroundColor: colors.danger,
                    borderColor: colors.danger,
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + formatNumber(context.parsed.y);
                        }
                    }
                }
            },
            scales: {
                x: { 
                    grid: { display: false },
                    stacked: true
                },
                y: {
                    beginAtZero: true,
                    stacked: true,
                    ticks: { callback: (v) => formatNumber(v) },
                    title: { display: true, text: 'FB数' }
                }
            }
        }
    });

    // 別カテゴリ商品レコメンド購買率
    const crossCategoryCtx = document.getElementById('crossCategoryPurchaseRateChart').getContext('2d');
    const beforeCross = dummyData.crossCategoryPurchaseRate.before;
    const afterCross = dummyData.crossCategoryPurchaseRate.after;
    const allBeforeCross = [...beforeCross, ...Array(9).fill(null)];
    const allAfterCross = [...Array(3).fill(null), ...afterCross];
    
    crossCategoryPurchaseRateChart = new Chart(crossCategoryCtx, {
        type: 'line',
        plugins: [introductionMonthPlugin],
        data: {
            labels: genaiLabels,
            datasets: [
                {
                    label: 'GenAI導入前',
                    data: allBeforeCross,
                    borderColor: colors.danger,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4,
                    spanGaps: false
                },
                {
                    label: 'GenAI導入後',
                    data: allAfterCross,
                    borderColor: colors.success,
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointRadius: 5,
                    tension: 0.4,
                    spanGaps: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            if (context.parsed.y === null) return null;
                            return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + '%';
                        },
                        filter: function(tooltipItem) {
                            return tooltipItem.parsed.y !== null;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false } },
                y: {
                    beginAtZero: true,
                    ticks: { callback: (v) => v.toFixed(1) + '%' },
                    title: { display: true, text: '購買率 (%)' }
                }
            }
        }
    });
}

// チャート更新関数（フィルタ変更時）
function updateAllCharts() {
    // 実際の実装では、フィルタに応じてデータを再計算してチャートを更新
    // ここでは簡易実装として、チャートを再描画
    console.log('Filters updated:', currentFilters);
}

// 初期化
function init() {
    initRevenueChart();
    updateFunnelValues();
    initTrendCharts();
    initZeroHitBounceRateChart();
    initSearchWordRankingTable();
    initGenAICharts();
    
    // 検索経路フィルタのラジオボタンコンテナを初期状態で非表示
    const searchPathRadioContainer = document.getElementById('searchPathRadioContainer');
    const searchPathRadioContainerSearchWord = document.getElementById('searchPathRadioContainerSearchWord');
    if (searchPathRadioContainer) {
        searchPathRadioContainer.style.display = 'none';
    }
    if (searchPathRadioContainerSearchWord) {
        searchPathRadioContainerSearchWord.style.display = 'none';
    }
}

// ページ読み込み時に初期化
document.addEventListener('DOMContentLoaded', init);
