import React, { useState, useEffect, useMemo } from 'react';
import {
  BookOpen,
  Calculator,
  TrendingUp,
  FileText,
  PieChart,
  Award,
  Brain,
  Library,
  CheckCircle2,
  Circle,
  Search,
  Download,
  Sun,
  Moon,
  ChevronRight,
  ChevronDown,
  AlertTriangle,
  Lightbulb,
  Sigma,
  ArrowRight,
  ShieldAlert,
  DollarSign,
  BarChart3,
  Layers,
  Compass,
  Copy,
  Check,
  RefreshCw,
  HelpCircle,
  ExternalLink,
  Menu,
  X,
  Sliders,
  Activity,
  Scale,
  Flame,
  Lock,
  Unlock,
  Eye
} from 'lucide-react';

// ============================================================================
// CURRICULUM DATA & CONTENT ARCHITECTURE
// ============================================================================

const MODULES = [
  {
    id: 'mod-1',
    number: '01',
    title: 'Personal Finance, Budgeting & Savings Architecture',
    subtitle: 'Cash Flow Engineering, Zero-Based Sheets & Emergency Runways',
    icon: DollarSign,
    color: 'emerald',
    lessons: [
      {
        id: '1.1',
        title: 'Cash Flow Engineering & Budgeting Frameworks',
        duration: '12 min read',
        summary: 'Master personal cash flow statements, 50/30/20 vs. Zero-Based Budgeting, and the Pay-Yourself-First automation pipeline.',
      },
      {
        id: '1.2',
        title: 'Building & Maintaining Personal Finance Budget Sheets',
        duration: '18 min read',
        summary: 'Complete spreadsheet architecture: Income Ledger, Fixed Cost Obligations, Variable Leakage Tracker, and Liquid Emergency Runway.',
      },
      {
        id: '1.3',
        title: 'Interactive Lab: Budget & Runway Architect + CSV Generator',
        duration: 'Interactive Tool',
        isTool: true,
        summary: 'Simulate your monthly savings rate, calculate your exact emergency fund runway, and export a ready-to-use CSV budget template.',
      }
    ],
    quiz: [
      {
        q: 'In a Zero-Based Budgeting (ZBB) framework, what should equal zero at the end of every month?',
        options: [
          'Your discretionary entertainment spending',
          'Total Income minus (Fixed Costs + Variable Costs + Debt Paydown + Investments/Savings)',
          'Your credit card utilization ratio',
          'Your checking account balance before payday'
        ],
        answer: 1,
        explanation: 'Zero-Based Budgeting assigns every single rupee/dollar of income a specific job (expenses, debt, or investments) so that Unallocated Cash = 0.'
      },
      {
        q: 'Where should a 6-to-12 month Emergency Fund ideally be parked?',
        options: [
          'Small-cap equity mutual funds for maximum compounding',
          'Physical gold jewelry in a bank locker',
          'High-liquidity, near-zero credit risk instruments (Overnight/Liquid Funds, T-Bills, Sweep-in FD)',
          'Long-duration 10-year Corporate Bonds'
        ],
        answer: 2,
        explanation: 'An emergency fund exists for capital preservation and instant liquidity during job loss or medical crises—never expose it to equity drawdown or duration/credit risk.'
      }
    ]
  },
  {
    id: 'mod-2',
    number: '02',
    title: 'CFA Level 1 Core Foundations',
    subtitle: 'Time Value of Money, Macro Cycles, Risk & Portfolio Theory',
    icon: Sigma,
    color: 'blue',
    lessons: [
      {
        id: '2.1',
        title: 'Time Value of Money (TVM), NPV & IRR Visually Explained',
        duration: '16 min read',
        summary: 'Present Value, Future Value, Discount Rates, Net Present Value (NPV), and Internal Rate of Return (IRR) for capital allocation.',
      },
      {
        id: '2.2',
        title: 'Macroeconomics & The Market Cycle',
        duration: '15 min read',
        summary: 'How Central Bank Repo/Fed Rates, Inflation, Bond Yield Curves (Inversion), and GDP growth expand or compress stock P/E multiples.',
      },
      {
        id: '2.3',
        title: 'Risk, Return & Modern Portfolio Theory (MPT)',
        duration: '18 min read',
        summary: 'Standard Deviation, Beta, Jensen’s Alpha, Sharpe vs. Sortino Ratio, Covariance, and Markowitz’s Efficient Frontier.',
      },
      {
        id: '2.4',
        title: 'Interactive Lab: Real Return, Compounding & DCF Simulator',
        duration: 'Interactive Tool',
        isTool: true,
        summary: 'Test how inflation erodes nominal wealth and how discount rates alter the present value of future cash flows.',
      }
    ],
    quiz: [
      {
        q: 'According to the Fisher Equation, if your portfolio earns a 12% nominal return and inflation is 6%, what is your approximate real return?',
        options: ['18.0%', '6.0% (exact: 5.66%)', '2.0%', '12.0%'],
        answer: 1,
        explanation: 'Using (1 + Nominal) / (1 + Inflation) - 1 = (1.12 / 1.06) - 1 = 5.66% real purchasing power growth.'
      },
      {
        q: 'Why does the Sortino Ratio often provide a better risk-adjusted performance picture than the Sharpe Ratio?',
        options: [
          'It ignores the risk-free rate entirely',
          'It penalizes only downside volatility (harmful drawdowns) rather than total volatility (which includes upside surges)',
          'It uses Beta instead of Standard Deviation',
          'It only applies to fixed-income bonds'
        ],
        answer: 1,
        explanation: 'Sharpe penalizes both upside and downside standard deviation. Sortino only divides excess return by downside deviation.'
      }
    ]
  },
  {
    id: 'mod-3',
    number: '03',
    title: 'How to Read a Company Annual Report',
    subtitle: '10-K / Annual Report Anatomy, 3-Statement Linkages & Forensics',
    icon: FileText,
    color: 'amber',
    lessons: [
      {
        id: '3.1',
        title: 'Anatomy of an Annual Report (MD&A & Auditor Opinions)',
        duration: '15 min read',
        summary: 'Decoding the Chairman’s Letter vs. reality, Management Discussion & Analysis (MD&A), and Unqualified vs. Qualified/Adverse Auditor Reports.',
      },
      {
        id: '3.2',
        title: 'The 3 Interlinked Financial Statements (P&L, Balance Sheet, Cash Flow)',
        duration: '22 min read',
        summary: 'Revenue recognition, EBITDA, Working Capital Cycle (Cash Conversion Cycle), Free Cash Flow (FCF), and why "Profit is an opinion, Cash is a fact."',
      },
      {
        id: '3.3',
        title: 'Forensic Accounting & Red Flags Scanner',
        duration: '17 min read',
        summary: 'Spotting CFO < PAT divergence, channel stuffing (receivables spike), promoter share pledging, related-party siphoning, and contingent liabilities.',
      },
      {
        id: '3.4',
        title: 'Interactive Lab: 3-Statement Transaction Linker & Forensic Diagnostic',
        duration: 'Interactive Tool',
        isTool: true,
        summary: 'Click real corporate scenarios to watch how a single event ripples across the P&L, Balance Sheet, and Cash Flow Statement simultaneously.',
      }
    ],
    quiz: [
      {
        q: 'A company reports soaring Net Profit (PAT) for 3 consecutive years, yet its Cash Flow from Operations (CFO) is negative. What is the most likely forensic explanation?',
        options: [
          'The company is paying too much corporate tax',
          'Aggressive revenue recognition / booking fake credit sales that sit stuck in Accounts Receivable or Inventory without real cash collection',
          'The company is issuing too many dividends',
          'Depreciation expense is too high'
        ],
        answer: 1,
        explanation: 'When cumulative CFO lags far behind cumulative PAT, earnings quality is poor—often caused by recording uncollected receivables or capitalizing normal operating expenses.'
      },
      {
        q: 'How is Free Cash Flow to Firm (FCFF) basic approximation calculated from the Cash Flow Statement?',
        options: [
          'Net Income + Dividends',
          'Operating Cash Flow (OCF) minus Capital Expenditures (CapEx)',
          'EBITDA minus Taxes',
          'Total Assets minus Total Liabilities'
        ],
        answer: 1,
        explanation: 'Free Cash Flow is the actual cash left over after the company pays for operating expenses and maintains/expands its physical asset base (CapEx).'
      }
    ]
  },
  {
    id: 'mod-4',
    number: '04',
    title: 'Equity Valuation & Picking Winning Stocks',
    subtitle: 'Economic Moats, Multiples, Value Traps & DuPont ROE',
    icon: TrendingUp,
    color: 'purple',
    lessons: [
      {
        id: '4.1',
        title: 'Economic Moats & Porter’s 5 Forces',
        duration: '14 min read',
        summary: 'Identifying durable competitive advantages: Switching Costs, Network Effects, Intangible Assets, Cost Advantages, and ROIC > WACC.',
      },
      {
        id: '4.2',
        title: 'Relative Valuation Multiples & Avoiding Value Traps',
        duration: '18 min read',
        summary: 'When to use P/E, PEG Ratio, Price-to-Book (P/B for Banks/NBFCs), EV/EBITDA (Heavy Industry), and why a low P/E stock can destroy your wealth.',
      },
      {
        id: '4.3',
        title: 'Intrinsic Valuation (DCF) & The 3-Lever DuPont ROE Analysis',
        duration: '16 min read',
        summary: 'Decomposing Return on Equity into Net Profit Margin × Asset Turnover × Financial Leverage to separate high-quality compounders from leveraged mirages.',
      },
      {
        id: '4.4',
        title: 'Interactive Lab: DuPont ROE Decomposer & 10-Point Stock Checklist',
        duration: 'Interactive Tool',
        isTool: true,
        summary: 'Input company numbers to decompose ROE quality and run any stock through a 10-point institutional checklist.',
      }
    ],
    quiz: [
      {
        q: 'Why is EV/EBITDA preferred over the P/E ratio when comparing capital-intensive companies (like Telecom, Steel, or Airlines)?',
        options: [
          'EV/EBITDA ignores market capitalization',
          'EV/EBITDA is capital-structure neutral (accounts for Debt and Cash) and strips out differing depreciation policies',
          'P/E ratios cannot be calculated for profitable companies',
          'EV/EBITDA is always a higher number than P/E'
        ],
        answer: 1,
        explanation: 'Two steel companies with identical operations can have wildly different P/E ratios simply because one uses heavy debt and different depreciation schedules. EV/EBITDA neutralizes both.'
      },
      {
        q: 'In DuPont Analysis, if Company A and Company B both have a 25% ROE, which one is fundamentally safer and higher quality?',
        options: [
          'The one generating 25% ROE primarily via 5x Financial Leverage (massive debt)',
          'The one generating 25% ROE via high Net Profit Margins and high Asset Turnover with minimal debt (Leverage ~ 1x)',
          'Both are equally safe since ROE is 25%',
          'Neither, ROE should be as low as possible'
        ],
        answer: 1,
        explanation: 'ROE driven by operational efficiency (margin + asset turnover) is sustainable; ROE artificially inflated by heavy debt (equity multiplier) risks bankruptcy in a downturn.'
      }
    ]
  },
  {
    id: 'mod-5',
    number: '05',
    title: 'Mutual Funds, ETFs, Gold & Multi-Asset Allocation',
    subtitle: 'Expense Drag, Rolling Returns, Smart-Beta & Gold Hedging',
    icon: PieChart,
    color: 'cyan',
    lessons: [
      {
        id: '5.1',
        title: 'Direct vs. Regular Plans, Expense Drag & ETF Tracking Error',
        duration: '14 min read',
        summary: 'How a 1% distributor commission compounds into a 25%+ corpus loss over 25 years, plus ETF liquidity and tracking error mechanics.',
      },
      {
        id: '5.2',
        title: 'Equity Fund Categories & Quantitative Selection Metrics',
        duration: '16 min read',
        summary: 'Large/Mid/Small/Flexi-cap rules, why Point-to-Point returns lie, Rolling Returns consistency, Upside/Downside Capture Ratios, and Portfolio Turnover.',
      },
      {
        id: '5.3',
        title: 'Gold, Commodities & Fixed Income Duration Risk',
        duration: '15 min read',
        summary: 'Gold ETFs/Sovereign Bonds vs. Physical Gold, why Gold moves inversely to Real Interest Rates, and Bond Duration/Credit risk.',
      },
      {
        id: '5.4',
        title: 'Interactive Lab: Direct vs. Regular Expense Drag & Multi-Asset Allocator',
        duration: 'Interactive Tool',
        isTool: true,
        summary: 'Calculate exactly how much wealth is lost to hidden Regular Plan commissions and design an age/risk-calibrated asset allocation.',
      }
    ],
    quiz: [
      {
        q: 'Why should you evaluate a Mutual Fund using 3-Year or 5-Year Rolling Returns instead of Trailing Point-to-Point returns?',
        options: [
          'Rolling returns are easier to calculate on a napkin',
          'Point-to-point returns suffer from severe recency/start-date bias, whereas Rolling Returns measure consistency across hundreds of market entry/exit dates',
          'SEBI/SEC prohibits showing point-to-point returns',
          'Rolling returns exclude expense ratios'
        ],
        answer: 1,
        explanation: 'A single lucky year can make a 5-year point-to-point CAGR look stellar. Rolling returns test the distribution of returns across every possible 3- or 5-year window.'
      },
      {
        q: 'What does an Upside Capture Ratio of 115 and a Downside Capture Ratio of 80 indicate about an active fund manager?',
        options: [
          'The fund loses more than the index in bear markets',
          'The fund outperforms the benchmark by 15% during bull rallies and falls 20% less than the benchmark during market crashes',
          'The fund has 80% cash and 115% leverage',
          'The fund has a high tracking error'
        ],
        answer: 1,
        explanation: 'Upside Capture > 100 and Downside Capture < 100 is the holy grail of active management: capturing more of the bull runs while cushioning drawdowns.'
      }
    ]
  },
  {
    id: 'mod-6',
    number: '06',
    title: 'IPOs, Market Mechanics, Long/Short & Strategies',
    subtitle: 'DRHP Forensics, Order Books, Short Squeezes & Core Styles',
    icon: Layers,
    color: 'rose',
    lessons: [
      {
        id: '6.1',
        title: 'Decoding an IPO & DRHP (Offer for Sale vs. Fresh Issue)',
        duration: '15 min read',
        summary: 'Why Private Equity exits via Offer for Sale (OFS) demand skepticism, Grey Market Premium (GMP) traps, and anchor lock-in dump cycles.',
      },
      {
        id: '6.2',
        title: 'Market Microstructure: Order Books, Short Selling & Derivatives',
        duration: '18 min read',
        summary: 'Bid-Ask Spread, Market vs. Limit vs. Stop-Loss Trigger orders, how Short Selling & Short Squeezes work, and F&O hedging vs. retail ruin.',
      },
      {
        id: '6.3',
        title: 'Core Market Strategies Compared (Value, GARP, Momentum, Arbitrage)',
        duration: '17 min read',
        summary: 'Graham/Buffett Value, Peter Lynch GARP (PEG < 1.2), Momentum/Trend Following (200-DMA & Relative Strength), Swing Trading, and Cash-Futures Arbitrage.',
      },
      {
        id: '6.4',
        title: 'Interactive Lab: Long/Short Position & Risk-Reward Payoff Simulator',
        duration: 'Interactive Tool',
        isTool: true,
        summary: 'Simulate Long vs. Short trades, position sizing based on the 1% account risk rule, and minimum Win-Rate requirements.',
      }
    ],
    quiz: [
      {
        q: 'In an IPO Draft Red Herring Prospectus (DRHP), if 95% of the issue size is an "Offer for Sale" (OFS) and only 5% is a "Fresh Issue", where does 95% of the public’s money go?',
        options: [
          'Into the company’s bank account to build new factories',
          'To pay down the company’s high-cost debt',
          'Directly into the personal pockets of exiting early VCs/Promoters—none of that 95% enters the company for growth',
          'To the stock exchange reserve fund'
        ],
        answer: 2,
        explanation: 'An Offer for Sale (OFS) is simply secondary share transfer from existing insiders to public retail/institutional buyers. Only a "Fresh Issue" infuses capital into the company.'
      },
      {
        q: 'What is the theoretical maximum loss on an unhedged Short Stock position?',
        options: [
          '100% of your initial capital',
          '50% of the stock price',
          'Unlimited (Infinite), because there is no ceiling on how high a stock price can rise during a short squeeze',
          'Only the brokerage fee'
        ],
        answer: 2,
        explanation: 'When you go Long at $100, the lowest a stock can go is $0 (max 100% loss). When you Short at $100, the stock can rise to $500, $1,000, or higher—creating unlimited loss potential.'
      }
    ]
  },
  {
    id: 'mod-7',
    number: '07',
    title: 'Behavioral Finance: How Emotions Manipulate Markets',
    subtitle: 'Psychology of Market Cycles, Cognitive Biases & Smart Money Traps',
    icon: Brain,
    color: 'orange',
    lessons: [
      {
        id: '7.1',
        title: 'The Psychology of Market Cycles (Stealth to Capitulation)',
        duration: '14 min read',
        summary: 'Mapping the emotional rollercoaster: Stealth Phase, Institutional Accumulation, Retail FOMO/Euphoria, Denial, Panic, and Capitulation.',
      },
      {
        id: '7.2',
        title: 'Cognitive & Emotional Biases Destroying Retail Returns',
        duration: '18 min read',
        summary: 'Kahneman & Tversky’s Loss Aversion (2.25x pain asymmetry), Disposition Effect, Anchoring, Confirmation Bias, Sunk Cost, and Herd Mentality.',
      },
      {
        id: '7.3',
        title: 'How Institutional Smart Money Exploits Retail Emotion',
        duration: '16 min read',
        summary: 'Stop-loss hunting below obvious support, volume distribution at media-hyped tops, and writing a binding Investment Policy Statement (IPS).',
      },
      {
        id: '7.4',
        title: 'Interactive Lab: Market Cycle Emotion Explorer & Bias Diagnostic',
        duration: 'Interactive Tool',
        isTool: true,
        summary: 'Click any stage on the interactive Market Cycle SVG curve to inspect institutional vs. retail behavior, and run a behavioral bias self-audit.',
      }
    ],
    quiz: [
      {
        q: 'What is the "Disposition Effect" in behavioral finance?',
        options: [
          'Buying index funds every month regardless of market news',
          'The irrational tendency of investors to sell winning stocks way too early (to lock in pride) while holding onto losing stocks indefinitely (to avoid the pain of realizing a loss)',
          'Rebalancing a portfolio from equity to debt once a year',
          'Trading based on insider information'
        ],
        answer: 1,
        explanation: 'Driven by Prospect Theory and Loss Aversion, retail investors "cut their flowers and water their weeds"—selling compounders early and holding crashing stocks hoping to break even.'
      },
      {
        q: 'During the "Euphoria / Thrill" peak of a market cycle, what are institutional "Smart Money" participants typically doing?',
        options: [
          'Taking out margin loans to buy more high-P/E small caps',
          'Quietly distributing (selling) their accumulated inventory into the massive wave of retail FOMO buying liquidity',
          'Closing their research departments',
          'Converting 100% of their portfolio into meme coins'
        ],
        answer: 1,
        explanation: 'Large institutions cannot sell $500M of stock in a depressed market without crashing the price; they need enthusiastic retail buyers during front-page euphoria to absorb their exit supply.'
      }
    ]
  },
  {
    id: 'mod-8',
    number: '08',
    title: 'Curated Research Vault & Screening Ecosystem',
    subtitle: 'Foundational Books, Academic Papers, Portals & Screeners',
    icon: Library,
    color: 'indigo',
    lessons: [
      {
        id: '8.1',
        title: 'The Complete Investor Research Library & Screening Toolkit',
        duration: 'Interactive Vault',
        isTool: true,
        summary: 'Filterable master database of timeless books, Nobel-winning academic papers, university valuation lectures, and fundamental screening queries.',
      }
    ],
    quiz: [
      {
        q: 'Which seminal 1979 academic paper laid the foundation for Behavioral Economics by proving that humans value gains and losses asymmetrically?',
        options: [
          'Fama & French Three-Factor Model (1992)',
          'Kahneman & Tversky — "Prospect Theory: An Analysis of Decision under Risk" (1979)',
          'Black-Scholes Option Pricing Model (1973)',
          'Modigliani-Miller Theorem (1958)'
        ],
        answer: 1,
        explanation: 'Daniel Kahneman and Amos Tversky transformed finance with Prospect Theory, demonstrating loss aversion and reference-point dependence.'
      }
    ]
  }
];

const RESEARCH_VAULT_ITEMS = [
  {
    category: 'Books',
    title: 'The Intelligent Investor — Benjamin Graham',
    level: 'Foundational',
    focus: 'Value Investing & Margin of Safety',
    takeaway: 'Focus specifically on Chapters 8 ("Mr. Market" allegory) and Chapter 20 ("Margin of Safety" as the central concept of investment).'
  },
  {
    category: 'Books',
    title: 'One Up On Wall Street — Peter Lynch',
    level: 'Beginner / Intermediate',
    focus: 'GARP & Categorizing Stocks',
    takeaway: 'Divides stocks into 6 clear buckets: Slow Growers, Stalwarts, Fast Growers, Cyclicals, Turnarounds, and Asset Plays. Introduces the PEG ratio.'
  },
  {
    category: 'Books',
    title: 'The Psychology of Money — Morgan Housel',
    level: 'Foundational',
    focus: 'Personal Finance & Behavior',
    takeaway: 'Financial success is less a hard science and more a soft skill where how you behave matters more than how smart your spreadsheet is.'
  },
  {
    category: 'Books',
    title: 'Financial Shenanigans — Howard Schilit',
    level: 'Advanced / CFA',
    focus: 'Forensic Accounting',
    takeaway: 'The ultimate manual for detecting how executives manipulate revenue recognition, shift expenses to the balance sheet, and fake operating cash flow.'
  },
  {
    category: 'Books',
    title: 'Thinking, Fast and Slow — Daniel Kahneman',
    level: 'Intermediate',
    focus: 'Cognitive Biases',
    takeaway: 'Explains System 1 (fast, emotional, automatic) vs. System 2 (slow, deliberate, logical) brain circuits and why System 1 wrecks trading accounts.'
  },
  {
    category: 'Papers',
    title: 'Prospect Theory: An Analysis of Decision under Risk (1979)',
    level: 'Academic',
    focus: 'Kahneman & Tversky',
    takeaway: 'Proved that the psychological pain of losing $1,000 is roughly 2.25x greater than the pleasure of gaining $1,000.'
  },
  {
    category: 'Papers',
    title: 'The Cross-Section of Expected Stock Returns (1992)',
    level: 'Academic / CFA',
    focus: 'Eugene Fama & Kenneth French',
    takeaway: 'Expanded CAPM into the 3-Factor Model: Market Risk (Beta), Size Factor (SMB - Small Minus Big), and Value Factor (HML - High Book-to-Market).'
  },
  {
    category: 'Papers',
    title: 'Returns to Buying Winners and Selling Losers (1993)',
    level: 'Academic',
    focus: 'Jegadeesh & Titman (Momentum)',
    takeaway: 'Documented the empirical anomaly that stocks with strong relative strength over the past 3–12 months continue outperforming over the next 3–12 months.'
  },
  {
    category: 'Papers',
    title: 'Trading Is Hazardous to Your Wealth (2000)',
    level: 'Academic',
    focus: 'Barber & Odean',
    takeaway: 'Analyzed 66,465 household brokerage accounts and proved the most active retail traders underperformed the market by 6.5% annually due to overconfidence and friction.'
  },
  {
    category: 'Channels & Courses',
    title: 'Aswath Damodaran (NYU Stern Valuation & Corporate Finance)',
    level: 'Institutional / CFA',
    focus: 'DCF Valuation & Equity Risk Premiums',
    takeaway: 'The "Dean of Valuation" publishes all his NYU MBA courses, spreadsheets, and global sector multiples completely free on YouTube and his website.'
  },
  {
    category: 'Channels & Courses',
    title: 'Zerodha Varsity (Complete Text & Video Modules)',
    level: 'Beginner to Advanced',
    focus: 'Indian & Global Market Mechanics',
    takeaway: 'Structured, jargon-free chapters covering Fundamental Analysis, Technical Analysis, Futures & Options, Personal Finance, and Sector Analysis.'
  },
  {
    category: 'Channels & Courses',
    title: 'Ben Felix (Common Sense Investing)',
    level: 'Evidence-Based',
    focus: 'Factor Investing & Academic Research',
    takeaway: 'Cites peer-reviewed financial economics papers on index investing, rent vs. buy math, dividend irrelevance, and factor tilts.'
  },
  {
    category: 'Channels & Courses',
    title: 'Patrick Boyle & The Plain Bagel',
    level: 'Intermediate / CFA',
    focus: 'Quantitative Finance & Market History',
    takeaway: 'Hedge fund manager and CFA charterholder perspectives debunking viral TikTok finance myths and analyzing macro/derivatives blowups.'
  },
  {
    category: 'Tools & Screeners',
    title: 'Screener.in / TIKR Terminal / Finviz',
    level: 'Practical Tool',
    focus: '10-Year Financial Ratios & Custom Queries',
    takeaway: 'Run custom quantitative screens like: Return on Capital Employed > 18% AND Debt to Equity < 0.3 AND Cash from Operations 5Yr > Net Profit 5Yr.'
  },
  {
    category: 'Tools & Screeners',
    title: 'SEC EDGAR / BSE-NSE Corporate Filings',
    level: 'Primary Source',
    focus: 'Official 10-K, 10-Q, DRHP & Earnings Transcripts',
    takeaway: 'Always read primary regulatory filings and quarterly conference call Q&A transcripts rather than relying on secondary financial news summaries.'
  }
];

// ============================================================================
// REUSABLE UI CALLOUT COMPONENTS
// ============================================================================

const CalloutBox = ({ type = 'pro', title, children }) => {
  const styles = {
    pro: {
      bg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
      iconColor: 'text-emerald-400',
      Icon: Lightbulb,
      badge: 'PRO TIP'
    },
    redflag: {
      bg: 'bg-rose-500/10 border-rose-500/30 text-rose-300',
      iconColor: 'text-rose-400',
      Icon: ShieldAlert,
      badge: 'FORENSIC RED FLAG'
    },
    cfa: {
      bg: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
      iconColor: 'text-blue-400',
      Icon: Sigma,
      badge: 'CFA CORE FORMULA'
    },
    warning: {
      bg: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
      iconColor: 'text-amber-400',
      Icon: AlertTriangle,
      badge: 'KEY INSIGHT'
    }
  };
  const cfg = styles[type] || styles.pro;
  const IconComp = cfg.Icon;

  return (
    <div className={`my-5 rounded-xl border p-4 sm:p-5 ${cfg.bg}`}>
      <div className="flex items-center gap-2 mb-2">
        <IconComp className={`w-5 h-5 ${cfg.iconColor} shrink-0`} />
        <span className={`text-xs font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-black/30 ${cfg.iconColor}`}>
          {cfg.badge}
        </span>
        {title && <h4 className="font-semibold text-sm sm:text-base text-white">{title}</h4>}
      </div>
      <div className="text-sm leading-relaxed text-slate-200/90 space-y-2">
        {children}
      </div>
    </div>
  );
};

// ============================================================================
// INTERACTIVE WIDGET 1: PERSONAL BUDGET & EMERGENCY RUNWAY + CSV GENERATOR
// ============================================================================

const BudgetSimulatorWidget = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(100000);
  const [fixedNeeds, setFixedNeeds] = useState(45000);
  const [variableWants, setVariableWants] = useState(20000);
  const [debtEmi, setDebtEmi] = useState(5000);
  const [liquidSavingsBuffer, setLiquidSavingsBuffer] = useState(350000);
  const [copiedCsv, setCopiedCsv] = useState(false);

  const monthlySurplus = Math.max(0, monthlyIncome - fixedNeeds - variableWants - debtEmi);
  const deficit = monthlyIncome - fixedNeeds - variableWants - debtEmi < 0
    ? Math.abs(monthlyIncome - fixedNeeds - variableWants - debtEmi)
    : 0;

  const needsPct = monthlyIncome > 0 ? ((fixedNeeds + debtEmi) / monthlyIncome) * 100 : 0;
  const wantsPct = monthlyIncome > 0 ? (variableWants / monthlyIncome) * 100 : 0;
  const savingsPct = monthlyIncome > 0 ? (monthlySurplus / monthlyIncome) * 100 : 0;

  const survivalBurnRate = fixedNeeds + debtEmi;
  const emergencyRunwayMonths = survivalBurnRate > 0 ? (liquidSavingsBuffer / survivalBurnRate).toFixed(1) : 0;
  const target6MonthFund = survivalBurnRate * 6;
  const target12MonthFund = survivalBurnRate * 12;

  const generateCsvContent = () => {
    const rows = [
      ['Category', 'Sub-Item', 'Type (50/30/20)', 'Budgeted Amount', 'Actual Spent', 'Variance', 'Notes / Automation Rule'],
      ['INCOME', 'Primary Post-Tax Salary', 'Inflow', monthlyIncome, monthlyIncome, 0, 'Credits on 1st of Month'],
      ['INCOME', 'Dividends / Freelance / Side Income', 'Inflow', 0, 0, 0, 'Sweep 100% to Investments'],
      ['INVESTMENTS (Pay Yourself First)', 'Core Index Fund / Equity SIP', 'Savings (20%+)', Math.round(monthlySurplus * 0.7), Math.round(monthlySurplus * 0.7), 0, 'Auto-debit on 3rd of Month'],
      ['INVESTMENTS (Pay Yourself First)', 'Emergency Liquid / T-Bill Sweep', 'Savings (20%+)', Math.round(monthlySurplus * 0.2), Math.round(monthlySurplus * 0.2), 0, 'Until 6-12m runway reached'],
      ['INVESTMENTS (Pay Yourself First)', 'Gold ETF / Multi-Asset Hedge', 'Savings (20%+)', Math.round(monthlySurplus * 0.1), Math.round(monthlySurplus * 0.1), 0, 'Portfolio stabilizer'],
      ['FIXED OBLIGATIONS', 'Rent / Home Mortgage', 'Needs (50%)', Math.round(fixedNeeds * 0.55), Math.round(fixedNeeds * 0.55), 0, 'Fixed Housing Cost'],
      ['FIXED OBLIGATIONS', 'Groceries & Essential Utilities', 'Needs (50%)', Math.round(fixedNeeds * 0.30), Math.round(fixedNeeds * 0.30), 0, 'Electricity, Broadband, Food'],
      ['FIXED OBLIGATIONS', 'Term & Health Insurance Prorated', 'Needs (50%)', Math.round(fixedNeeds * 0.15), Math.round(fixedNeeds * 0.15), 0, 'Mandatory Risk Shield'],
      ['DEBT SERVICE', 'Education / Car / Personal EMI', 'Needs (50%)', debtEmi, debtEmi, 0, 'Target <15% Debt-to-Income'],
      ['VARIABLE WANTS', 'Dining Out, Travel & Subscriptions', 'Wants (30%)', variableWants, variableWants, 0, 'Cap via separate spending card'],
      ['SUMMARY', 'Unallocated Zero-Based Balance', 'Check = 0', 0, 0, 0, 'Income - Outflows = 0']
    ];
    return rows.map(r => r.join(',')).join('\n');
  };

  const handleDownloadCsv = () => {
    const csv = generateCsvContent();
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'MarketMastery_ZeroBased_Budget_Template.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyCsv = () => {
    navigator.clipboard.writeText(generateCsvContent());
    setCopiedCsv(true);
    setTimeout(() => setCopiedCsv(false), 2000);
  };

  return (
    <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 sm:p-6 my-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
            Interactive Simulator 1.3
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
            Zero-Based Cash Flow & Emergency Runway Architect
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleDownloadCsv}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition cursor-pointer shadow-lg shadow-emerald-600/20"
          >
            <Download className="w-4 h-4" />
            Download CSV Budget Sheet
          </button>
          <button
            onClick={handleCopyCsv}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium transition cursor-pointer border border-slate-700"
          >
            {copiedCsv ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            {copiedCsv ? 'Copied CSV!' : 'Copy Raw CSV'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sliders */}
        <div className="space-y-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-300 font-medium">Post-Tax Monthly Income</span>
              <span className="font-mono font-bold text-emerald-400">{monthlyIncome.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="20000"
              max="500000"
              step="5000"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-300 font-medium">Fixed Living Needs (Rent, Food, Utilities, Insurance)</span>
              <span className="font-mono font-bold text-blue-400">{fixedNeeds.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="5000"
              max="300000"
              step="2500"
              value={fixedNeeds}
              onChange={(e) => setFixedNeeds(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-300 font-medium">Variable Lifestyle Wants (Dining, Shopping, Leisure)</span>
              <span className="font-mono font-bold text-amber-400">{variableWants.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="0"
              max="200000"
              step="2500"
              value={variableWants}
              onChange={(e) => setVariableWants(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-300 font-medium">Monthly Debt EMIs (Loans / Credit Cards)</span>
              <span className="font-mono font-bold text-rose-400">{debtEmi.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="0"
              max="150000"
              step="2500"
              value={debtEmi}
              onChange={(e) => setDebtEmi(Number(e.target.value))}
              className="w-full accent-rose-500 cursor-pointer"
            />
          </div>

          <div className="pt-2 border-t border-slate-800">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-300 font-medium">Current Liquid Emergency Savings</span>
              <span className="font-mono font-bold text-cyan-400">{liquidSavingsBuffer.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2000000"
              step="25000"
              value={liquidSavingsBuffer}
              onChange={(e) => setLiquidSavingsBuffer(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Live Output Diagnostics */}
        <div className="flex flex-col justify-between space-y-4">
          {/* Ratio Bar */}
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              50 / 30 / 20 Allocation Diagnostic
            </h4>

            <div className="h-5 w-full bg-slate-800 rounded-full overflow-hidden flex">
              <div
                style={{ width: `${Math.min(100, needsPct)}%` }}
                className="bg-blue-500 h-full transition-all"
                title="Needs & Debt"
              />
              <div
                style={{ width: `${Math.min(100 - Math.min(100, needsPct), wantsPct)}%` }}
                className="bg-amber-500 h-full transition-all"
                title="Wants"
              />
              <div
                style={{ width: `${Math.max(0, savingsPct)}%` }}
                className="bg-emerald-500 h-full transition-all"
                title="Investable Surplus"
              />
            </div>

            <div className="grid grid-cols-3 gap-2 mt-3 text-center">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div className="text-xs text-slate-400">Needs + EMI</div>
                <div className={`text-sm font-bold ${needsPct > 55 ? 'text-rose-400' : 'text-blue-400'}`}>
                  {needsPct.toFixed(1)}%
                </div>
                <div className="text-[10px] text-slate-500">Target ≤ 50%</div>
              </div>
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <div className="text-xs text-slate-400">Wants</div>
                <div className={`text-sm font-bold ${wantsPct > 30 ? 'text-amber-400' : 'text-slate-200'}`}>
                  {wantsPct.toFixed(1)}%
                </div>
                <div className="text-[10px] text-slate-500">Target ≤ 30%</div>
              </div>
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <div className="text-xs text-slate-400">Investable Rate</div>
                <div className={`text-sm font-bold ${savingsPct >= 20 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {savingsPct.toFixed(1)}%
                </div>
                <div className="text-[10px] text-slate-500">Target ≥ 20-35%</div>
              </div>
            </div>

            {deficit > 0 ? (
              <div className="mt-3 p-2.5 rounded-lg bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>
                  <strong>Cash Flow Deficit!</strong> Your expenses exceed income by{' '}
                  <span className="font-mono font-bold">{deficit.toLocaleString()}</span>/month. Cut variable wants immediately.
                </span>
              </div>
            ) : (
              <div className="mt-3 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200 flex items-center justify-between">
                <span>Monthly Automated SIP Capacity:</span>
                <span className="font-mono font-bold text-sm text-emerald-400">
                  +{monthlySurplus.toLocaleString()} / mo
                </span>
              </div>
            )}
          </div>

          {/* Emergency Fund Runway Box */}
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Emergency Survival Runway (Liquid Buffer ÷ Mandatory Burn)
              </h4>
              <span
                className={`px-2 py-0.5 text-xs font-bold rounded ${
                  Number(emergencyRunwayMonths) >= 6
                    ? 'bg-emerald-500/20 text-emerald-300'
                    : Number(emergencyRunwayMonths) >= 3
                    ? 'bg-amber-500/20 text-amber-300'
                    : 'bg-rose-500/20 text-rose-300'
                }`}
              >
                {emergencyRunwayMonths} Months Covered
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Mandatory monthly survival burn (Needs + EMIs):{' '}
              <span className="text-white font-mono">{survivalBurnRate.toLocaleString()}</span>
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block">6-Month Safe Target:</span>
                <span className="font-mono font-bold text-cyan-400 text-sm">
                  {target6MonthFund.toLocaleString()}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block">12-Month Fortress Target:</span>
                <span className="font-mono font-bold text-emerald-400 text-sm">
                  {target12MonthFund.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// INTERACTIVE WIDGET 2: CFA TVM, REAL RETURN & DCF SIMULATOR
// ============================================================================

const CfaTvmSimulatorWidget = () => {
  const [monthlySip, setMonthlySip] = useState(25000);
  const [nominalCagr, setNominalCagr] = useState(13);
  const [inflationRate, setInflationRate] = useState(6);
  const [years, setYears] = useState(20);

  // Real Return via exact Fisher Formula: (1 + r_nom)/(1 + inf) - 1
  const realReturnRate = ((1 + nominalCagr / 100) / (1 + inflationRate / 100) - 1) * 100;

  const milestones = useMemo(() => {
    const data = [];
    const rNomMonthly = nominalCagr / 100 / 12;
    const rRealMonthly = realReturnRate / 100 / 12;

    for (let y = 1; y <= years; y++) {
      const m = y * 12;
      const invested = monthlySip * m;
      const nominalFV =
        rNomMonthly > 0
          ? monthlySip * (((Math.pow(1 + rNomMonthly, m) - 1) / rNomMonthly) * (1 + rNomMonthly))
          : invested;
      const realFV =
        rRealMonthly > 0
          ? monthlySip * (((Math.pow(1 + rRealMonthly, m) - 1) / rRealMonthly) * (1 + rRealMonthly))
          : invested;

      data.push({
        year: y,
        invested: Math.round(invested),
        nominalFV: Math.round(nominalFV),
        realFV: Math.round(realFV)
      });
    }
    return data;
  }, [monthlySip, nominalCagr, realReturnRate, years]);

  const finalPoint = milestones[milestones.length - 1] || {
    invested: 0,
    nominalFV: 0,
    realFV: 0
  };

  return (
    <div className="bg-slate-900/90 border border-blue-500/30 rounded-2xl p-5 sm:p-6 my-6 shadow-xl">
      <div className="border-b border-slate-800 pb-4 mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full">
          Interactive Simulator 2.4
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
          CFA Time Value of Money: Nominal vs. Inflation-Adjusted (Real) Wealth Engine
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Most calculators ignore inflation. See how the Fisher Equation separates optical nominal wealth from true purchasing power.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 space-y-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-300">Monthly Investment (PMT)</span>
              <span className="font-mono font-bold text-blue-400">{monthlySip.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="2000"
              max="200000"
              step="2000"
              value={monthlySip}
              onChange={(e) => setMonthlySip(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-300">Expected Nominal Return (CAGR %)</span>
              <span className="font-mono font-bold text-emerald-400">{nominalCagr}%</span>
            </div>
            <input
              type="range"
              min="4"
              max="24"
              step="0.5"
              value={nominalCagr}
              onChange={(e) => setNominalCagr(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-300">Average Annual Inflation (%)</span>
              <span className="font-mono font-bold text-rose-400">{inflationRate}%</span>
            </div>
            <input
              type="range"
              min="1"
              max="12"
              step="0.5"
              value={inflationRate}
              onChange={(e) => setInflationRate(Number(e.target.value))}
              className="w-full accent-rose-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-300">Compounding Horizon (Years)</span>
              <span className="font-mono font-bold text-amber-400">{years} Years</span>
            </div>
            <input
              type="range"
              min="5"
              max="40"
              step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs space-y-1">
            <div className="flex justify-between">
              <span className="text-slate-300">Fisher Exact Real Return:</span>
              <span className="font-mono font-bold text-blue-300">{realReturnRate.toFixed(2)}% / yr</span>
            </div>
            <div className="text-[11px] text-slate-400">
              Formula: [(1 + {nominalCagr / 100}) ÷ (1 + {inflationRate / 100})] - 1
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between bg-slate-950/60 p-4 rounded-xl border border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
              <div className="text-xs text-slate-400">Total Principal Invested</div>
              <div className="text-base sm:text-lg font-mono font-bold text-slate-200 mt-1">
                {finalPoint.invested.toLocaleString()}
              </div>
            </div>
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
              <div className="text-xs text-emerald-300">Nominal Future Corpus</div>
              <div className="text-base sm:text-lg font-mono font-bold text-emerald-400 mt-1">
                {finalPoint.nominalFV.toLocaleString()}
              </div>
            </div>
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
              <div className="text-xs text-blue-300">Real Purchasing Power (Today's Value)</div>
              <div className="text-base sm:text-lg font-mono font-bold text-blue-400 mt-1">
                {finalPoint.realFV.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Visual Bar Chart of Growth */}
          <div className="mt-2">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Wealth Trajectory Across {years} Years</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 inline-block"></span> Nominal
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-blue-500 inline-block"></span> Real (Inflation-Adj)
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-slate-600 inline-block"></span> Principal
                </span>
              </div>
            </div>
            <div className="h-44 flex items-end gap-1.5 pt-4 pb-1 px-2 bg-slate-900 rounded-lg border border-slate-800 overflow-x-auto">
              {milestones
                .filter((_, idx) => idx % Math.max(1, Math.floor(years / 10)) === 0 || idx === milestones.length - 1)
                .map((m) => {
                  const maxVal = Math.max(1, finalPoint.nominalFV);
                  const nomH = Math.max(6, (m.nominalFV / maxVal) * 100);
                  const realH = Math.max(4, (m.realFV / maxVal) * 100);
                  const invH = Math.max(2, (m.invested / maxVal) * 100);
                  return (
                    <div key={m.year} className="flex-1 flex flex-col items-center h-full justify-end group min-w-[28px]">
                      <div className="w-full flex items-end justify-center gap-0.5 h-32">
                        <div
                          style={{ height: `${invH}%` }}
                          className="w-2 bg-slate-600 rounded-t transition-all"
                          title={`Yr ${m.year} Principal: ${m.invested.toLocaleString()}`}
                        />
                        <div
                          style={{ height: `${realH}%` }}
                          className="w-2.5 bg-blue-500 rounded-t transition-all"
                          title={`Yr ${m.year} Real Value: ${m.realFV.toLocaleString()}`}
                        />
                        <div
                          style={{ height: `${nomH}%` }}
                          className="w-2.5 bg-emerald-500 rounded-t transition-all"
                          title={`Yr ${m.year} Nominal: ${m.nominalFV.toLocaleString()}`}
                        />
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 font-mono">Y{m.year}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// INTERACTIVE WIDGET 3: 3-STATEMENT TRANSACTION LINKER & FORENSIC SCANNER
// ============================================================================

const ThreeStatementLinkerWidget = () => {
  const [selectedScenario, setSelectedScenario] = useState(0);

  const scenarios = [
    {
      title: '1. $100M Credit Sale to Customer (No Cash Collected Yet)',
      tag: 'Revenue vs. Cash Reality',
      isRedFlag: true,
      pnl: 'Revenue +$100M → Net Profit (PAT) increases by +$75M (assuming 25% tax). Looks like booming growth!',
      bs: 'Accounts Receivable (Asset) +$100M; Retained Earnings (Equity) +$75M; Tax Payable +$25M. Cash = $0 change.',
      cf: 'Net Income starts at +$75M, but Working Capital adjustment subtracts -$100M (Increase in Receivables). Operating Cash Flow (CFO) is NEGATIVE -$25M!',
      forensicLesson: 'This is how fraudulent or struggling companies fake profits (Channel Stuffing). Always compare 5-year cumulative CFO against 5-year cumulative Net Profit!'
    },
    {
      title: '2. $50M Factory Machinery Purchased in Cash (CapEx)',
      tag: 'Capital Allocation',
      isRedFlag: false,
      pnl: 'Immediate impact = $0! CapEx does NOT hit the P&L on day one; only annual Depreciation ($5M/yr over 10 yrs) hits the P&L later.',
      bs: 'Cash (Asset) drops by -$50M; Property, Plant & Equipment (Asset) rises by +$50M. Total Assets remain balanced.',
      cf: 'Operating Cash Flow (OCF) is unchanged ($0), but Cash Flow from Investing (CFI) shows -$50M outflow. Free Cash Flow (FCF = OCF - CapEx) drops by -$50M.',
      forensicLesson: 'Warning: Fraudulent companies sometimes classify routine operating expenses (like maintenance or salaries) as "CapEx" to artificially hide expenses from the P&L and inflate EBITDA!'
    },
    {
      title: '3. Inventory Obsolete Write-Down of $30M',
      tag: 'Balance Sheet Cleansing',
      isRedFlag: true,
      pnl: 'COGS / Write-off Expense increases by $30M → Operating Profit & Net Income drop sharply.',
      bs: 'Inventory (Asset) decreases by -$30M; Retained Earnings (Equity) decreases by -$30M (pre-tax).',
      cf: 'Operating Cash Flow (OCF) has $0 cash impact today! The cash was already spent in the past when the raw materials were bought; the write-down is a non-cash accounting recognition.',
      forensicLesson: 'Watch Inventory Days (Inventory ÷ COGS × 365). If Inventory Days spike year after year in a fashion, tech, or manufacturing firm, a massive write-down shock is coming.'
    },
    {
      title: '4. Promoter Pledges 60% of Their Shares for Personal Debt',
      tag: 'Governance Red Flag',
      isRedFlag: true,
      pnl: 'No direct impact on company P&L initially.',
      bs: 'No change on the company Balance Sheet—found in the Shareholding Pattern & Footnotes of the Annual Report.',
      cf: 'No immediate company cash flow impact, BUT creates catastrophic stock crash risk.',
      forensicLesson: 'If the stock price falls 20% in a market correction, lenders issue a margin call and forcefully dump the promoter’s pledged shares on the open market—triggering a 50-80% death spiral!'
    }
  ];

  const current = scenarios[selectedScenario];

  return (
    <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-5 sm:p-6 my-6 shadow-xl">
      <div className="border-b border-slate-800 pb-4 mb-5">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">
          Interactive Simulator 3.4
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
          3-Statement Transaction Linker & Forensic Accounting Lab
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Select a corporate event below to trace how it flows across the Profit & Loss, Balance Sheet, and Cash Flow Statement simultaneously.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
        {scenarios.map((scen, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedScenario(idx)}
            className={`text-left p-3.5 rounded-xl border transition cursor-pointer flex items-start justify-between gap-2 ${
              selectedScenario === idx
                ? 'bg-amber-500/15 border-amber-500 text-white shadow-md'
                : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div>
              <div className="text-xs font-semibold text-amber-400 mb-0.5">{scen.tag}</div>
              <div className="text-sm font-bold">{scen.title}</div>
            </div>
            {scen.isRedFlag && <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-1" />}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="p-4 rounded-xl bg-slate-950 border border-blue-500/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">1. Profit & Loss (P&L)</span>
            <Activity className="w-4 h-4 text-blue-400" />
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{current.pnl}</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-purple-500/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">2. Balance Sheet</span>
            <Scale className="w-4 h-4 text-purple-400" />
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{current.bs}</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">3. Cash Flow Statement</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{current.cf}</p>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-rose-200">
          <strong className="text-white block mb-0.5">Analyst Takeaway:</strong>
          {current.forensicLesson}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// INTERACTIVE WIDGET 4: DUPONT ROE DECOMPOSER & 10-POINT STOCK CHECKLIST
// ============================================================================

const DuPontAndChecklistWidget = () => {
  const [netProfitMargin, setNetProfitMargin] = useState(16); // %
  const [assetTurnover, setAssetTurnover] = useState(1.1); // x
  const [equityMultiplier, setEquityMultiplier] = useState(1.3); // Assets / Equity

  const calculatedRoe = (netProfitMargin / 100) * assetTurnover * equityMultiplier * 100;

  const checklistItems = [
    'ROCE / ROIC > 15% consistently over the past 5 years',
    'Debt-to-Equity < 0.5x (or Interest Coverage Ratio > 5x)',
    'Cumulative 5-Yr Operating Cash Flow (CFO) ≥ Cumulative 5-Yr Net Profit (PAT)',
    'Positive Free Cash Flow (FCF = OCF - CapEx) allowing self-funded growth',
    'Promoter Share Pledging = 0% (Zero forced-liquidation risk)',
    'Receivables Days & Inventory Days are stable or declining (No channel stuffing)',
    'Clear Economic Moat (Pricing power, high switching cost, network effect, or cost leadership)',
    'Clean Auditor Opinion with no complex Related-Party siphoning loans',
    'PEG Ratio (P/E ÷ Earnings Growth Rate) < 1.5x or reasonable vs. historical median P/E',
    'Industry Tailwinds: Expanding Total Addressable Market (TAM) over the next decade'
  ];

  const [checkedStockRules, setCheckedStockRules] = useState([0, 1, 2, 4, 6]);

  const toggleRule = (idx) => {
    setCheckedStockRules((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="bg-slate-900/90 border border-purple-500/30 rounded-2xl p-5 sm:p-6 my-6 shadow-xl space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full">
          Interactive Simulator 4.4
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
          DuPont 3-Lever ROE Analyzer & 10-Point Stock Picker Scorecard
        </h3>
      </div>

      {/* DuPont Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center bg-slate-950/60 p-4 rounded-xl border border-slate-800">
        <div className="lg:col-span-7 space-y-3">
          <h4 className="text-sm font-bold text-purple-300 uppercase tracking-wider">
            DuPont Identity: ROE = Net Margin × Asset Turnover × Financial Leverage
          </h4>

          <div>
            <div className="flex justify-between text-xs sm:text-sm mb-1">
              <span className="text-slate-300">1. Net Profit Margin (PAT ÷ Revenue) — Pricing Power</span>
              <span className="font-mono font-bold text-emerald-400">{netProfitMargin}%</span>
            </div>
            <input
              type="range"
              min="2"
              max="40"
              step="1"
              value={netProfitMargin}
              onChange={(e) => setNetProfitMargin(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs sm:text-sm mb-1">
              <span className="text-slate-300">2. Asset Turnover (Revenue ÷ Total Assets) — Efficiency</span>
              <span className="font-mono font-bold text-blue-400">{assetTurnover.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="3.5"
              step="0.1"
              value={assetTurnover}
              onChange={(e) => setAssetTurnover(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs sm:text-sm mb-1">
              <span className="text-slate-300">3. Financial Leverage (Total Assets ÷ Equity) — Debt Risk</span>
              <span className="font-mono font-bold text-rose-400">{equityMultiplier.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="6.0"
              step="0.1"
              value={equityMultiplier}
              onChange={(e) => setEquityMultiplier(Number(e.target.value))}
              className="w-full accent-rose-500 cursor-pointer"
            />
          </div>
        </div>

        <div className="lg:col-span-5 p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-3">
          <div className="text-xs uppercase font-bold text-slate-400">Resulting Return on Equity (ROE)</div>
          <div className="text-3xl font-mono font-extrabold text-purple-400">
            {calculatedRoe.toFixed(1)}%
          </div>
          <div className="text-xs px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
            {equityMultiplier > 2.5 ? (
              <span className="text-rose-400 font-semibold">
                ⚠️ Caution: High Debt-Driven ROE! Over 2.5x leverage means this ROE is fragile in a recession (unless it is a regulated Bank).
              </span>
            ) : calculatedRoe >= 18 ? (
              <span className="text-emerald-400 font-semibold">
                ✅ High-Quality Compounder! High ROE driven by operational margins & asset efficiency with low debt.
              </span>
            ) : (
              <span className="text-amber-300">
                Moderate ROE. Look for margin expansion or higher asset turnover to beat cost of capital.
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 10-Point Stock Checklist */}
      <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h4 className="text-sm font-bold text-white">
            Interactive 10-Point Institutional Stock Selection Scorecard
          </h4>
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              checkedStockRules.length >= 8
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : checkedStockRules.length >= 5
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
            }`}
          >
            Score: {checkedStockRules.length} / 10 ({checkedStockRules.length >= 8 ? 'High Conviction Buy' : checkedStockRules.length >= 5 ? 'Watchlist / Needs Digging' : 'Avoid / High Risk'})
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {checklistItems.map((rule, idx) => {
            const isChecked = checkedStockRules.includes(idx);
            return (
              <button
                key={idx}
                onClick={() => toggleRule(idx)}
                className={`flex items-start gap-2.5 p-2.5 rounded-lg border text-left text-xs transition cursor-pointer ${
                  isChecked
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-slate-100'
                    : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                {isChecked ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <Circle className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                )}
                <span>{rule}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// INTERACTIVE WIDGET 5: DIRECT VS REGULAR EXPENSE DRAG & ASSET ALLOCATION
// ============================================================================

const MutualFundExpenseWidget = () => {
  const [lumpSumOrSip, setLumpSumOrSip] = useState(30000);
  const [directTer, setDirectTer] = useState(0.4);
  const [regularTer, setRegularTer] = useState(1.6);
  const [horizonYears, setHorizonYears] = useState(25);
  const grossReturn = 13;

  const calcCorpus = (ter) => {
    const netReturn = (grossReturn - ter) / 100 / 12;
    const months = horizonYears * 12;
    return Math.round(
      lumpSumOrSip * (((Math.pow(1 + netReturn, months) - 1) / netReturn) * (1 + netReturn))
    );
  };

  const directCorpus = calcCorpus(directTer);
  const regularCorpus = calcCorpus(regularTer);
  const commissionLost = directCorpus - regularCorpus;

  return (
    <div className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-5 sm:p-6 my-6 shadow-xl">
      <div className="border-b border-slate-800 pb-4 mb-5">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full">
          Interactive Simulator 5.4
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
          Direct vs. Regular Mutual Fund Expense Ratio Drag Calculator
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          A seemingly tiny 1.2% annual distributor commission compounds against you every single year. See the exact wealth leakage.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-300">Monthly SIP Amount</span>
              <span className="font-mono font-bold text-cyan-400">{lumpSumOrSip.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="5000"
              max="150000"
              step="5000"
              value={lumpSumOrSip}
              onChange={(e) => setLumpSumOrSip(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-300">Direct Plan Expense Ratio (TER %)</span>
              <span className="font-mono font-bold text-emerald-400">{directTer.toFixed(2)}%</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1.0"
              step="0.05"
              value={directTer}
              onChange={(e) => setDirectTer(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-300">Regular Plan Expense Ratio (TER %)</span>
              <span className="font-mono font-bold text-rose-400">{regularTer.toFixed(2)}%</span>
            </div>
            <input
              type="range"
              min="1.1"
              max="2.5"
              step="0.05"
              value={regularTer}
              onChange={(e) => setRegularTer(Number(e.target.value))}
              className="w-full accent-rose-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-300">Investment Horizon</span>
              <span className="font-mono font-bold text-amber-400">{horizonYears} Years</span>
            </div>
            <input
              type="range"
              min="5"
              max="35"
              step="1"
              value={horizonYears}
              onChange={(e) => setHorizonYears(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <div className="text-xs text-emerald-300">Direct Plan Final Wealth</div>
              <div className="text-xl font-mono font-bold text-emerald-400 mt-1">
                {directCorpus.toLocaleString()}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Net Return: {(grossReturn - directTer).toFixed(2)}%</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-xs text-slate-400">Regular Plan Final Wealth</div>
              <div className="text-xl font-mono font-bold text-slate-200 mt-1">
                {regularCorpus.toLocaleString()}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Net Return: {(grossReturn - regularTer).toFixed(2)}%</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/40">
            <div className="text-xs uppercase font-bold tracking-wider text-rose-300">
              Hidden Wealth Lost to Broker Trail Commissions
            </div>
            <div className="text-2xl font-mono font-extrabold text-rose-400 mt-1">
              -{commissionLost.toLocaleString()}
            </div>
            <p className="text-xs text-rose-200/90 mt-1">
              That is <strong>{((commissionLost / directCorpus) * 100).toFixed(1)}%</strong> of your entire retirement corpus surrendered for holding the exact same portfolio in a "Regular" plan instead of "Direct".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// INTERACTIVE WIDGET 6: LONG / SHORT POSITION SIZING & RISK-REWARD LAB
// ============================================================================

const LongShortPositionWidget = () => {
  const [direction, setDirection] = useState('LONG');
  const [accountSize, setAccountSize] = useState(500000);
  const [riskPctPerTrade, setRiskPctPerTrade] = useState(1.0);
  const [entryPrice, setEntryPrice] = useState(1000);
  const [stopLossPrice, setStopLossPrice] = useState(950);
  const [targetPrice, setTargetPrice] = useState(1150);

  // Sync valid stop/target when direction flips
  const handleDirectionSwitch = (dir) => {
    setDirection(dir);
    if (dir === 'LONG') {
      setEntryPrice(1000);
      setStopLossPrice(950);
      setTargetPrice(1150);
    } else {
      setEntryPrice(1000);
      setStopLossPrice(1050);
      setTargetPrice(850);
    }
  };

  const maxCapitalAtRisk = (accountSize * riskPctPerTrade) / 100;
  const riskPerShare =
    direction === 'LONG'
      ? Math.max(1, entryPrice - stopLossPrice)
      : Math.max(1, stopLossPrice - entryPrice);
  const rewardPerShare =
    direction === 'LONG'
      ? Math.max(0, targetPrice - entryPrice)
      : Math.max(0, entryPrice - targetPrice);

  const optimalQuantity = Math.floor(maxCapitalAtRisk / riskPerShare);
  const positionCapitalDeployed = optimalQuantity * entryPrice;
  const rrRatio = riskPerShare > 0 ? (rewardPerShare / riskPerShare).toFixed(2) : 0;
  const breakevenWinRate = Number(rrRatio) > 0 ? (100 / (1 + Number(rrRatio))).toFixed(1) : 100;

  return (
    <div className="bg-slate-900/90 border border-rose-500/30 rounded-2xl p-5 sm:p-6 my-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full">
            Interactive Simulator 6.4
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
            Institutional Position Sizing & Long/Short Risk-Reward Engine
          </h3>
        </div>
        <div className="flex rounded-lg bg-slate-950 p-1 border border-slate-800">
          <button
            onClick={() => handleDirectionSwitch('LONG')}
            className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition cursor-pointer ${
              direction === 'LONG'
                ? 'bg-emerald-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            LONG (Buy Low → Sell High)
          </button>
          <button
            onClick={() => handleDirectionSwitch('SHORT')}
            className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition cursor-pointer ${
              direction === 'SHORT'
                ? 'bg-rose-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            SHORT (Sell High → Buy Back Low)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
          <div>
            <div className="flex justify-between text-xs sm:text-sm mb-1">
              <span className="text-slate-300">Total Trading Account Capital</span>
              <span className="font-mono font-bold text-white">{accountSize.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="50000"
              max="5000000"
              step="50000"
              value={accountSize}
              onChange={(e) => setAccountSize(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs sm:text-sm mb-1">
              <span className="text-slate-300">Max Account Risk Per Trade (1% Rule)</span>
              <span className="font-mono font-bold text-amber-400">{riskPctPerTrade.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="5.0"
              step="0.25"
              value={riskPctPerTrade}
              onChange={(e) => setRiskPctPerTrade(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2">
            <div>
              <label className="text-[11px] text-slate-400 block mb-1">Entry Price</label>
              <input
                type="number"
                value={entryPrice}
                onChange={(e) => setEntryPrice(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm font-mono text-white"
              />
            </div>
            <div>
              <label className="text-[11px] text-rose-400 block mb-1">
                Stop-Loss ({direction === 'LONG' ? '< Entry' : '> Entry'})
              </label>
              <input
                type="number"
                value={stopLossPrice}
                onChange={(e) => setStopLossPrice(Number(e.target.value))}
                className="w-full bg-slate-900 border border-rose-500/40 rounded-lg px-2.5 py-1.5 text-sm font-mono text-rose-300"
              />
            </div>
            <div>
              <label className="text-[11px] text-emerald-400 block mb-1">
                Target ({direction === 'LONG' ? '> Entry' : '< Entry'})
              </label>
              <input
                type="number"
                value={targetPrice}
                onChange={(e) => setTargetPrice(Number(e.target.value))}
                className="w-full bg-slate-900 border border-emerald-500/40 rounded-lg px-2.5 py-1.5 text-sm font-mono text-emerald-300"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
              <div className="text-xs text-slate-400">Max Allowed Loss (Stop Out)</div>
              <div className="text-lg font-mono font-bold text-rose-400">
                -{maxCapitalAtRisk.toLocaleString()}
              </div>
            </div>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
              <div className="text-xs text-slate-400">Exact Shares / Qty to Trade</div>
              <div className="text-lg font-mono font-bold text-cyan-400">
                {optimalQuantity.toLocaleString()} Shares
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <div className="text-[11px] text-slate-400">Risk : Reward</div>
              <div className={`text-sm font-mono font-bold ${Number(rrRatio) >= 2 ? 'text-emerald-400' : 'text-amber-400'}`}>
                1 : {rrRatio}
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <div className="text-[11px] text-slate-400">Breakeven Win%</div>
              <div className="text-sm font-mono font-bold text-blue-400">{breakevenWinRate}%</div>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <div className="text-[11px] text-slate-400">Capital Deployed</div>
              <div className="text-sm font-mono font-bold text-slate-200">
                {positionCapitalDeployed.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-400 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
            <strong>Mathematical Edge:</strong> With a <span className="text-emerald-400 font-mono">1:{rrRatio}</span> Risk-Reward ratio, you only need to be right <strong>{breakevenWinRate}%</strong> of the time to break even!
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// INTERACTIVE WIDGET 7: MARKET CYCLE EMOTION ROLLERCOASTER SVG MAP
// ============================================================================

const MarketCycleEmotionWidget = () => {
  const [activeStage, setActiveStage] = useState(3);

  const cycleStages = [
    {
      name: '1. Stealth / Accumulation',
      x: 60,
      y: 190,
      emotion: 'Disbelief ("This rally is a fake dead-cat bounce")',
      retailAction: 'Sitting in cash or Fixed Deposits after getting burned in the prior crash.',
      smartMoneyAction: 'Quietly accumulating high-ROIC stocks at depressed P/E multiples with zero media noise.'
    },
    {
      name: '2. Awareness & Institutional Markup',
      x: 170,
      y: 135,
      emotion: 'Optimism & Belief ("Macro numbers are actually improving")',
      retailAction: 'Beginning to restart paused SIPs; waiting for a pullback that barely comes.',
      smartMoneyAction: 'Adding to winning positions as earnings upgrades confirm the fundamental turnaround.'
    },
    {
      name: '3. Mania / Retail FOMO',
      x: 270,
      y: 65,
      emotion: 'Thrill ("Everyone in my office is making easy money in small-caps & IPOs!")',
      retailAction: 'Dumping safe debt funds to buy speculative penny/momentum stocks and oversubscribed OFS IPOs.',
      smartMoneyAction: 'Scaling out of overvalued mid/small caps; Private Equity insiders file IPO Offer-For-Sale exits.'
    },
    {
      name: '4. Euphoria / Blow-off Top',
      x: 360,
      y: 28,
      emotion: 'Euphoria ("I am a financial genius! Valuations don’t matter in this new era!")',
      retailAction: 'Maximum leverage, quitting jobs to day-trade options, taking loans to invest at peak P/E.',
      smartMoneyAction: 'Heavy institutional distribution into retail buying liquidity; raising cash and gold hedges.'
    },
    {
      name: '5. Complacency & Denial',
      x: 460,
      y: 95,
      emotion: 'Complacency ("Just a healthy 15% dip, buy the dip on margin!")',
      retailAction: 'Averaging down into broken, overvalued story stocks without checking cash flows.',
      smartMoneyAction: 'Shorting structurally weak, high-debt companies; staying defensive in cash/short T-bills.'
    },
    {
      name: '6. Panic & Capitulation',
      x: 565,
      y: 205,
      emotion: 'Panic & Capitulation ("Get me out at any price! The stock market is a rigged casino!")',
      retailAction: 'Stopping all SIPs and selling quality equities at the exact bottom to stop the emotional pain.',
      smartMoneyAction: 'Deploying dry powder cash reserves aggressively as forced margin calls create generational bargains.'
    },
    {
      name: '7. Despair & Revival',
      x: 665,
      y: 175,
      emotion: 'Depression → Hope ("I will never touch stocks again... wait, why is it up 25%?")',
      retailAction: 'Ignoring equities completely while inflation erodes their bank savings.',
      smartMoneyAction: 'Full institutional portfolio positioned for the next multi-year bull cycle.'
    }
  ];

  const activeData = cycleStages[activeStage];

  return (
    <div className="bg-slate-900/90 border border-orange-500/30 rounded-2xl p-5 sm:p-6 my-6 shadow-xl">
      <div className="border-b border-slate-800 pb-4 mb-5">
        <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-full">
          Interactive Simulator 7.4
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
          Interactive Psychology of Market Cycles Map (Click Any Node)
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Contrast what Retail Investors feel and do vs. how Institutional "Smart Money" operates at every stage of the cycle.
        </p>
      </div>

      {/* Interactive SVG Curve */}
      <div className="bg-slate-950 rounded-xl border border-slate-800 p-3 overflow-x-auto">
        <svg viewBox="0 0 730 240" className="w-full min-w-[580px] h-auto">
          <defs>
            <linearGradient id="cycleGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="45%" stopColor="#f59e0b" />
              <stop offset="55%" stopColor="#ef4444" />
              <stop offset="80%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {/* Mean Long-Term Intrinsic Value Line */}
          <line
            x1="30"
            y1="195"
            x2="700"
            y2="120"
            stroke="#475569"
            strokeDasharray="6 6"
            strokeWidth="2"
          />
          <text x="40" y="215" fill="#64748b" fontSize="11">
            --- Intrinsic Corporate Earnings Trendline
          </text>

          {/* Rollercoaster Path */}
          <path
            d="M 40 200 C 100 190, 140 160, 170 135 C 210 105, 240 85, 270 65 C 310 38, 335 28, 360 28 C 400 28, 430 65, 460 95 C 500 135, 535 205, 565 205 C 600 205, 635 190, 690 165"
            fill="none"
            stroke="url(#cycleGrad)"
            strokeWidth="4"
          />

          {/* Interactive Nodes */}
          {cycleStages.map((st, idx) => {
            const isSelected = activeStage === idx;
            return (
              <g
                key={idx}
                onClick={() => setActiveStage(idx)}
                className="cursor-pointer"
              >
                {isSelected && (
                  <circle
                    cx={st.x}
                    cy={st.y}
                    r="16"
                    fill="rgba(249, 115, 22, 0.25)"
                  />
                )}
                <circle
                  cx={st.x}
                  cy={st.y}
                  r={isSelected ? '9' : '7'}
                  fill={isSelected ? '#f97316' : '#1e293b'}
                  stroke={isSelected ? '#fff' : '#94a3b8'}
                  strokeWidth="2.5"
                />
                <text
                  x={st.x}
                  y={st.y - 14}
                  textAnchor="middle"
                  fill={isSelected ? '#fb923c' : '#cbd5e1'}
                  fontSize="10"
                  fontWeight={isSelected ? 'bold' : 'normal'}
                >
                  {st.name.split(' ')[1]}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Stage Breakdown Cards */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30">
          <div className="text-xs font-bold uppercase text-orange-400 mb-1">
            Selected Cycle Stage
          </div>
          <div className="text-base font-bold text-white mb-1">{activeData.name}</div>
          <p className="text-xs text-orange-200">{activeData.emotion}</p>
        </div>

        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30">
          <div className="text-xs font-bold uppercase text-rose-400 mb-1">
            Emotional Retail Herd Behavior
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {activeData.retailAction}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <div className="text-xs font-bold uppercase text-emerald-400 mb-1">
            Institutional Smart Money Action
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {activeData.smartMoneyAction}
          </p>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// INTERACTIVE WIDGET 8: CURATED RESEARCH VAULT & FILTERABLE DIRECTORY
// ============================================================================

const ResearchVaultWidget = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [vaultQuery, setVaultQuery] = useState('');

  const categories = ['All', 'Books', 'Papers', 'Channels & Courses', 'Tools & Screeners'];

  const filteredItems = RESEARCH_VAULT_ITEMS.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(vaultQuery.toLowerCase()) ||
      item.focus.toLowerCase().includes(vaultQuery.toLowerCase()) ||
      item.takeaway.toLowerCase().includes(vaultQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="my-6 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 p-4 rounded-xl border border-indigo-500/30">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search books, papers, tools..."
            value={vaultQuery}
            onChange={(e) => setVaultQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300">
                  {item.category}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">{item.level}</span>
              </div>
              <h4 className="font-bold text-white text-sm sm:text-base mb-1">{item.title}</h4>
              <div className="text-xs font-medium text-emerald-400 mb-2">Focus: {item.focus}</div>
              <p className="text-xs text-slate-300 leading-relaxed">{item.takeaway}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Ready-to-Copy Screener.in Query Block */}
      <div className="p-5 rounded-xl bg-slate-950 border border-emerald-500/30">
        <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2">
          Copy-Paste Fundamental Stock Screener Query (Screener.in / TIKR Syntax)
        </h4>
        <pre className="text-xs font-mono text-slate-200 bg-slate-900 p-3.5 rounded-lg border border-slate-800 overflow-x-auto leading-relaxed">
{`Return on capital employed > 18% AND
Average return on capital employed 5Years > 16% AND
Debt to equity < 0.35 AND
Interest Coverage Ratio > 6 AND
Sales growth 5Years > 12% AND
Profit growth 5Years > 14% AND
Cash from operations last year > Net Profit last year AND
Pledged percentage = 0 AND
Market Capitalization > 1000`}
        </pre>
      </div>
    </div>
  );
};

// ============================================================================
// LESSON CONTENT RENDERER (DEEP-DIVE TEXT + DIAGRAMS + TABLES)
// ============================================================================

const LessonContentRenderer = ({ lessonId }) => {
  switch (lessonId) {
    // ------------------------------------------------------------------------
    // MODULE 1 LESSONS
    // ------------------------------------------------------------------------
    case '1.1':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            Before you ever analyze a company’s Balance Sheet or buy your first stock, you must turn your own household into a high-margin, cash-flow-positive enterprise. Institutional investing begins with <strong>Personal Cash Flow Engineering</strong>.
          </p>

          <h3 className="text-xl font-bold text-white pt-2">
            1. The Golden Equation Reversal: Pay Yourself First
          </h3>
          <p>
            90% of people operate on the broken retail equation: <code className="text-rose-400 bg-slate-900 px-2 py-0.5 rounded">Income - Expenses = Savings</code>. Because human desires are infinite (Parkinson’s Law applied to money: expenses always rise to meet income), nothing is left at the end of the month.
          </p>
          <p>
            Wealthy capital allocators reverse the pipeline on Day 1 of receiving their salary:
            <code className="text-emerald-400 bg-slate-900 px-2 py-0.5 rounded ml-1">Income - Automated Investments = Spendable Lifestyle Budget</code>.
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs sm:text-sm bg-slate-900/70 rounded-xl overflow-hidden border border-slate-800">
              <thead>
                <tr className="bg-slate-950 text-slate-300 border-b border-slate-800">
                  <th className="p-3.5">Framework</th>
                  <th className="p-3.5">How It Works</th>
                  <th className="p-3.5">Best Suited For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="p-3.5 font-bold text-emerald-400">50 / 30 / 20 Rule</td>
                  <td className="p-3.5">≤50% Mandatory Needs, ≤30% Lifestyle Wants, ≥20% Long-Term Investments.</td>
                  <td className="p-3.5">Beginners seeking a simple, low-friction guardrail without tracking every coffee.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-blue-400">Zero-Based Budgeting (ZBB)</td>
                  <td className="p-3.5">Every single dollar/rupee of income is assigned a job before the month begins so <code className="text-white">Income - Outflows = 0</code>.</td>
                  <td className="p-3.5">Serious savers aiming for 35%–60% savings rates and rapid financial independence.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-purple-400">3-Account Bucket Pipeline</td>
                  <td className="p-3.5">Bank A (Salary Inflow & Fixed Bills) → Auto-transfer on 2nd to Bank B (Brokerage/SIPs) + Bank C (Guilt-Free Spending Card).</td>
                  <td className="p-3.5">Eliminates willpower fatigue through structural bank separation.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CalloutBox type="pro" title="The Anti-Lifestyle Creep Rule (50% Raise Rule)">
            Whenever you receive a salary increment or bonus, commit to investing <strong>at least 50% of the incremental raise</strong> automatically via a Step-Up SIP before your lifestyle adjusts to the new income bracket.
          </CalloutBox>
        </div>
      );

    case '1.2':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            A professional personal finance budget sheet is not a diary of guilt—it is a forward-looking <strong>Treasury Management System</strong>. Here is how to architect your master spreadsheet in 4 tabs:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-xs font-bold uppercase text-emerald-400 mb-1">Tab 1: Income & Tax Ledger</div>
              <p className="text-xs sm:text-sm">
                Track Post-Tax Base Salary, Bonuses, Dividends, and Rental/Side cash flow. Always budget off your <strong>base guaranteed post-tax income</strong>—treat bonuses as 100% investment windfalls.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-xs font-bold uppercase text-blue-400 mb-1">Tab 2: Fixed Obligations & Prorated Sinking Funds</div>
              <p className="text-xs sm:text-sm">
                Rent/Mortgage, Utilities, Groceries, plus a <strong>Sinking Fund column</strong> (divide annual Term Insurance, Health Insurance, and Car Maintenance by 12 so annual bills never shock your monthly cash flow).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-xs font-bold uppercase text-amber-400 mb-1">Tab 3: Variable Leakage Audit</div>
              <p className="text-xs sm:text-sm">
                Quick-commerce impulse orders, unused SaaS/OTT subscriptions, dining out. Tag each expense with a <em>Value Score (1–5)</em>: cut everything scored 1 or 2 ruthlessly.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-xs font-bold uppercase text-cyan-400 mb-1">Tab 4: Net Worth & Emergency Runway Tracker</div>
              <p className="text-xs sm:text-sm">
                Updated once a quarter: Liquid Cash + Equity + Debt Funds + Gold minus Liabilities = Net Worth.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white pt-2">
            2. The Pre-Investment Shield: Emergency Fund & Insurance
          </h3>
          <p>
            Never buy a single share of stock until three non-negotiable foundations are locked in:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>
              <strong>Zero High-Interest Toxic Debt:</strong> Credit cards charge 36%–42% APR and personal loans charge 13%–18%. No stock market strategy reliably beats 36% risk-free. Pay off high-APR debt first using the <em>Debt Avalanche</em> method (highest interest rate first).
            </li>
            <li>
              <strong>6 to 12 Months Emergency Runway:</strong> Parked in instant-redemption Overnight/Liquid Mutual Funds, Treasury Bills, or a high-yield sweep account.
            </li>
            <li>
              <strong>Pure Term Life Insurance (15x–20x Annual Income) & Comprehensive Health Insurance:</strong> Never mix insurance with investment (avoid high-commission ULIPs, Endowment, or Money-Back policies that yield a dismal 4%–5% IRR).
            </li>
          </ul>

          <CalloutBox type="redflag" title="Why Mixing Insurance & Investment (ULIP / Endowment) Destroys Wealth">
            Traditional endowment plans lock your money for 15–20 years at a 4.5%–5.5% return—below inflation—while providing inadequate life cover. Always follow <strong>BTIR: Buy Term Insurance and Invest the Rest</strong> in low-cost index/equity funds.
          </CalloutBox>
        </div>
      );

    case '1.3':
      return <BudgetSimulatorWidget />;

    // ------------------------------------------------------------------------
    // MODULE 2 LESSONS
    // ------------------------------------------------------------------------
    case '2.1':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            The bedrock of the entire CFA curriculum and institutional finance is the <strong>Time Value of Money (TVM)</strong>: a dollar received today is worth more than a dollar received tomorrow because today’s dollar can be invested to earn a positive rate of return.
          </p>

          <CalloutBox type="cfa" title="Core TVM, NPV & Fisher Equations">
            <div className="font-mono text-xs sm:text-sm space-y-2 bg-slate-950 p-3 rounded-lg border border-blue-500/20">
              <div>1. Future Value (FV) = PV × (1 + r)^n</div>
              <div>2. Present Value (PV) = FV ÷ (1 + r)^n</div>
              <div>3. Net Present Value (NPV) = ∑ [ CF_t ÷ (1 + r)^t ] - Initial Investment (CF_0)</div>
              <div>4. Fisher Real Return = [ (1 + Nominal Rate) ÷ (1 + Inflation Rate) ] - 1</div>
            </div>
          </CalloutBox>

          <h3 className="text-xl font-bold text-white">
            NPV vs. IRR vs. XIRR: How Institutions Judge Any Investment
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Net Present Value (NPV):</strong> Discounts all future cash flows back to today using your required rate of return (Cost of Capital / WACC). If <strong>NPV &gt; 0</strong>, the investment creates wealth above its opportunity cost.
            </li>
            <li>
              <strong>Internal Rate of Return (IRR):</strong> The exact discount rate at which <code className="text-white">NPV = 0</code>. If a project’s IRR exceeds your required hurdle rate (e.g., 15% IRR vs. 10% cost of capital), it is accretive.
            </li>
            <li>
              <strong>XIRR (Extended IRR):</strong> When you invest via monthly SIPs, top-ups, and partial withdrawals on irregular dates, simple CAGR is mathematically invalid. Always use <code className="text-emerald-400">=XIRR(values, dates)</code> in Excel/Google Sheets to measure your true portfolio return.
            </li>
          </ul>
        </div>
      );

    case '2.2':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            Stock prices do not move in a vacuum. As Warren Buffett famously noted, <em>"Interest rates are to asset prices what gravity is to the apple."</em> When risk-free central bank rates are near 0%, equity valuations soar; when rates surge to 5%–7%, equity P/E multiples compress violently.
          </p>

          <h3 className="text-xl font-bold text-white">
            The Macroeconomic Transmission Mechanism
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-bold text-rose-400 text-sm mb-1">Hawkish Central Bank (Rate Hikes)</h4>
              <p className="text-xs sm:text-sm">
                Inflation rises → Central Bank hikes Repo/Fed Funds Rate → Corporate borrowing costs rise → Discount rate (<code className="text-white">r</code>) in DCF models increases → Present Value of future cash flows drops → High-P/E growth stocks correct sharply.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-bold text-emerald-400 text-sm mb-1">Dovish Central Bank (Rate Cuts & QE)</h4>
              <p className="text-xs sm:text-sm">
                Growth slows → Central Bank cuts rates & injects liquidity → Bond yields fall → Fixed income becomes unattractive → Capital floods into equities → P/E multiples expand.
              </p>
            </div>
          </div>

          <CalloutBox type="warning" title="The Inverted Yield Curve Recession Signal">
            Normally, a 10-Year Government Bond pays a higher yield than a 2-Year Bond to compensate for time risk. When the <strong>2-Year Yield exceeds the 10-Year Yield (Yield Curve Inversion)</strong>, bond markets are signaling that short-term rates are restrictively high and a growth slowdown or recession is ahead.
          </CalloutBox>
        </div>
      );

    case '2.3':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            Amateur investors only ask: <em>"How much return did it make?"</em> Institutional CFA charterholders ask: <em>"How much risk was taken to generate that return?"</em>
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs sm:text-sm bg-slate-900/70 rounded-xl overflow-hidden border border-slate-800">
              <thead>
                <tr className="bg-slate-950 text-slate-300 border-b border-slate-800">
                  <th className="p-3.5">Metric</th>
                  <th className="p-3.5">Formula / Definition</th>
                  <th className="p-3.5">How to Interpret It</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="p-3.5 font-bold text-blue-400">Standard Deviation (σ)</td>
                  <td className="p-3.5">Dispersion of returns around the mean return.</td>
                  <td className="p-3.5">Higher σ = wider price swings. Measures total volatility.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-purple-400">Beta (β)</td>
                  <td className="p-3.5">Cov(Stock, Market) ÷ Var(Market)</td>
                  <td className="p-3.5">β = 1.0 moves with index; β = 1.5 swings 50% more than index; β = 0.6 is defensive (FMCG/Pharma).</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-emerald-400">Jensen’s Alpha (α)</td>
                  <td className="p-3.5">Actual Return - [Rf + β × (Rm - Rf)]</td>
                  <td className="p-3.5">Excess return generated purely by manager skill beyond passive market Beta exposure.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-amber-400">Sharpe Ratio</td>
                  <td className="p-3.5">(Portfolio Return - Risk-Free Rate) ÷ Total Std Dev (σ)</td>
                  <td className="p-3.5">Return earned per unit of total volatility. Sharpe &gt; 1.0 is good; &gt; 1.5 is exceptional.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-cyan-400">Sortino Ratio</td>
                  <td className="p-3.5">(Portfolio Return - Risk-Free Rate) ÷ Downside Deviation</td>
                  <td className="p-3.5">Superior to Sharpe because it only penalizes harmful downside crashes, not upside rallies.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );

    case '2.4':
      return <CfaTvmSimulatorWidget />;

    // ------------------------------------------------------------------------
    // MODULE 3 LESSONS
    // ------------------------------------------------------------------------
    case '3.1':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            A company’s Annual Report (or SEC Form 10-K / IPO DRHP) is a 200 to 400-page document. You do not read it like a novel from page 1—you dissect it like a forensic investigator in a specific order.
          </p>

          <h3 className="text-xl font-bold text-white">
            The 4-Step Annual Report Reading Sequence
          </h3>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Start with the Independent Auditor’s Report (Before the Glossy Photos!):</strong> Check whether the auditor issued an <em>Unqualified (Clean) Opinion</em>. Watch out for <strong>Qualified Opinions</strong>, <strong>Adverse Opinions</strong>, or <strong>Key Audit Matters (KAM) / Emphasis of Matter</strong> paragraphs highlighting revenue disputes or going-concern doubts. Also check if the statutory auditor resigned mid-term!
            </li>
            <li>
              <strong>Management Discussion & Analysis (MD&A):</strong> Read how management explains industry headwinds, raw material inflation, capacity utilization %, and capital allocation plans. Cross-check their promises from 3 years ago against what they actually delivered today.
            </li>
            <li>
              <strong>Consolidated vs. Standalone Financial Statements:</strong> Always analyze <strong>Consolidated Statements</strong>, which include all subsidiaries and joint ventures. Unscrupulous companies hide debt and losses inside unlisted subsidiaries while making the Standalone parent look clean.
            </li>
            <li>
              <strong>Notes to Accounts & Footnotes:</strong> This is where the bodies are buried—Contingent Liabilities (pending tax/legal lawsuits off-balance-sheet), Related Party Transactions, and Accounting Policy changes.
            </li>
          </ol>
        </div>
      );

    case '3.2':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            Every company is governed by three interlinked financial statements. If you only look at Net Profit on the P&L, you are flying blind.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-blue-500/30">
              <h4 className="font-bold text-blue-400 mb-2">1. Profit & Loss (Income Statement)</h4>
              <p className="text-xs sm:text-sm">
                Measures performance over a period (accrual basis).
                <br /><br />
                <strong>Flow:</strong> Revenue - COGS = Gross Profit → minus SG&A = <strong>EBITDA</strong> → minus Depreciation & Amortization = <strong>EBIT (Operating Profit)</strong> → minus Interest & Tax = <strong>PAT (Net Income)</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/30">
              <h4 className="font-bold text-purple-400 mb-2">2. Balance Sheet (Position Snapshot)</h4>
              <p className="text-xs sm:text-sm">
                Snapshot on a single date: <code className="text-white">Assets = Liabilities + Shareholders' Equity</code>.
                <br /><br />
                <strong>Watch:</strong> Debt-to-Equity, Goodwill bloat from overpriced acquisitions, and the <strong>Cash Conversion Cycle (CCC)</strong> = Inventory Days + Receivable Days - Payable Days.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30">
              <h4 className="font-bold text-emerald-400 mb-2">3. Cash Flow Statement (The Truth Detector)</h4>
              <p className="text-xs sm:text-sm">
                Strips away accrual accounting tricks.
                <br /><br />
                <strong>3 Sections:</strong>
                <br />• <strong>CFO:</strong> Cash from core business
                <br />• <strong>CFI:</strong> CapEx & acquisitions
                <br />• <strong>CFF:</strong> Debt/Equity issuance & dividends
              </p>
            </div>
          </div>

          <CalloutBox type="cfa" title="The Free Cash Flow (FCF) Golden Formula">
            <div className="font-mono text-xs sm:text-sm bg-slate-950 p-3 rounded-lg border border-blue-500/20">
              Free Cash Flow (FCF) = Cash Flow from Operations (CFO) - Capital Expenditures (CapEx)
            </div>
            <p className="mt-2 text-xs sm:text-sm">
              A company with high PAT but negative FCF year after year must constantly borrow debt or dilute shareholders just to stay alive.
            </p>
          </CalloutBox>
        </div>
      );

    case '3.3':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            In stock picking, avoiding a single 80% corporate governance blowup does more for your compounding than finding three average winners. Memorize these <strong>5 Forensic Red Flags</strong>:
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30">
              <h4 className="font-bold text-rose-300 text-sm">Red Flag #1: Cumulative CFO &lt; 70% of Cumulative PAT over 5 Years</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                If a company reports $500M in cumulative Net Profit over 5 years, it should generate at least $350M–$500M+ in Operating Cash Flow. If CFO is tiny or negative, profits are trapped in fake receivables or inflated inventory.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30">
              <h4 className="font-bold text-rose-300 text-sm">Red Flag #2: Receivables Growing Faster Than Revenue</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                If Sales grow 15% YoY while Trade Receivables surge 60% YoY, management is "stuffing the channel"—pushing unsold goods to distributors on loose credit just to meet quarterly targets.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30">
              <h4 className="font-bold text-rose-300 text-sm">Red Flag #3: High Cash on Balance Sheet + High High-Cost Debt Simultaneously</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Why would a company hold $200M in low-yield bank cash while paying 12% interest on $200M of debt? Frequently (as seen in historic frauds like Satyam/Wirecard), the cash balance is fictitious or encumbered.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30">
              <h4 className="font-bold text-rose-300 text-sm">Red Flag #4: Related Party Transactions (RPT) & Promoter Pledging</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Check the RPT schedule for loans given to promoter-owned private entities at 0% interest or inflated raw material purchases from family-owned shells.
              </p>
            </div>
          </div>
        </div>
      );

    case '3.4':
      return <ThreeStatementLinkerWidget />;

    // ------------------------------------------------------------------------
    // MODULE 4 LESSONS
    // ------------------------------------------------------------------------
    case '4.1':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            In capitalism, high profits attract fierce competition until returns revert to the cost of capital—<strong>unless the company is protected by an Economic Moat</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-bold text-purple-400 text-sm mb-1">1. Network Effects</h4>
              <p className="text-xs sm:text-sm">
                Each additional user makes the platform exponentially more valuable for existing users (e.g., Stock Exchanges, Visa/Mastercard, Dominant Marketplaces).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-bold text-blue-400 text-sm mb-1">2. High Switching Costs</h4>
              <p className="text-xs sm:text-sm">
                Replacing the product is too risky, painful, or expensive relative to its cost (e.g., Core Banking ERP Software, Specialty Aircraft Components, Medical Devices).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-bold text-emerald-400 text-sm mb-1">3. Intangible Assets (Brands, Patents, Licenses)</h4>
              <p className="text-xs sm:text-sm">
                True brand moats exist only when the brand commands <strong>pricing power</strong> (ability to hike prices above inflation without losing volume) or regulatory monopoly.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-bold text-amber-400 text-sm mb-1">4. Structural Cost Advantage</h4>
              <p className="text-xs sm:text-sm">
                Economies of scale, proprietary process technology, or captive low-cost raw material mines that competitors cannot replicate.
              </p>
            </div>
          </div>

          <CalloutBox type="cfa" title="Quantitative Proof of a Moat: ROIC > WACC">
            Never trust a story about a "moat" unless it shows up in the numbers: <strong>Return on Invested Capital (ROIC = NOPAT ÷ Invested Capital) must consistently exceed Weighted Average Cost of Capital (WACC)</strong> by a wide spread (e.g., ROIC &gt; 18% vs. WACC ~ 10%).
          </CalloutBox>
        </div>
      );

    case '4.2':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            Using the P/E ratio for every sector is one of the biggest mistakes beginners make. Different business models require specific valuation multiples:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs sm:text-sm bg-slate-900/70 rounded-xl overflow-hidden border border-slate-800">
              <thead>
                <tr className="bg-slate-950 text-slate-300 border-b border-slate-800">
                  <th className="p-3.5">Sector / Industry</th>
                  <th className="p-3.5">Primary Valuation Multiple</th>
                  <th className="p-3.5">Why P/E Alone Fails Here</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="p-3.5 font-bold text-white">FMCG, IT Services, Consumer Brands</td>
                  <td className="p-3.5 text-emerald-400 font-semibold">P/E & PEG Ratio (P/E ÷ Growth)</td>
                  <td className="p-3.5">Asset-light, low debt, steady cash flows—P/E works well here.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-white">Banks, NBFCs & Insurance</td>
                  <td className="p-3.5 text-blue-400 font-semibold">Price-to-Book (P/B) & ROE + GNPA/NNPA</td>
                  <td className="p-3.5">Money IS their raw material; a bank can artificially boost P/E today by under-provisioning for bad loans (NPAs).</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-white">Cement, Steel, Telecom, Airlines, Hospitals</td>
                  <td className="p-3.5 text-purple-400 font-semibold">EV / EBITDA & EV / Ton</td>
                  <td className="p-3.5">Heavy debt and massive depreciation distort P/E. Enterprise Value (Market Cap + Debt - Cash) captures the true buyout price.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-white">Commodities & Cyclicals (Metals, Oil, Sugar)</td>
                  <td className="p-3.5 text-amber-400 font-semibold">Normalized Mid-Cycle P/B or EV/EBITDA</td>
                  <td className="p-3.5"><strong>Cyclical Inversion Rule:</strong> Buy cyclicals when P/E looks high/infinite at cycle trough; SELL when P/E looks cheap (4x–6x) at peak cycle earnings!</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CalloutBox type="redflag" title="How to Spot a Value Trap (Why Low P/E ≠ Cheap)">
            A stock trading at 6x P/E is NOT a bargain if its core industry is facing terminal disruption, its debt is exploding, or its earnings are at a cyclical peak about to fall 70%. Cheap stocks get cheaper when ROIC is below cost of capital.
          </CalloutBox>
        </div>
      );

    case '4.3':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            While multiples tell you how the market prices a stock relative to peers, <strong>Intrinsic Valuation (DCF)</strong> values a business based strictly on the cash it will generate over its lifetime, and <strong>DuPont Analysis</strong> tells you how efficiently management generates returns.
          </p>

          <h3 className="text-xl font-bold text-white">
            The 4 Steps of a Discounted Cash Flow (DCF) Model
          </h3>
          <ol className="list-decimal pl-6 space-y-2 text-sm sm:text-base">
            <li>
              <strong>Forecast Free Cash Flows (FCFF) for 5–10 Years:</strong> Project revenue growth, operating margins, tax rate, and reinvestment needs (CapEx + Working Capital).
            </li>
            <li>
              <strong>Estimate Discount Rate (WACC):</strong> Weighted cost of debt and equity (CAPM: <code className="text-white">Ke = Rf + β × ERP</code>).
            </li>
            <li>
              <strong>Calculate Terminal Value (TV):</strong> Value of cash flows beyond Year 10 using the Gordon Growth Model: <code className="text-emerald-400">TV = [FCF_n × (1 + g)] ÷ (WACC - g)</code>, where terminal growth <code className="text-white">g</code> never exceeds long-term nominal GDP growth (3%–5%).
            </li>
            <li>
              <strong>Discount Back & Apply Margin of Safety:</strong> Sum Present Value of FCFs + Present Value of Terminal Value - Net Debt = Intrinsic Equity Value. Demand a 20%–30% Margin of Safety below intrinsic value.
            </li>
          </ol>
        </div>
      );

    case '4.4':
      return <DuPontAndChecklistWidget />;

    // ------------------------------------------------------------------------
    // MODULE 5 LESSONS
    // ------------------------------------------------------------------------
    case '5.1':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            Every Mutual Fund scheme exists in two identical twins: a <strong>Direct Plan</strong> and a <strong>Regular Plan</strong>. They have the exact same fund manager and identical stock holdings—except the Regular Plan quietly deducts a 0.8% to 1.5% commission every single year (even on your compounded gains!) to pay the bank/broker who sold it to you.
          </p>

          <CalloutBox type="pro" title="Index Funds & ETF Selection Checklist">
            <ul className="list-disc pl-5 space-y-1">
              <li>Always ensure the word <strong>"Direct"</strong> and <strong>"Growth"</strong> (not IDCW/Dividend, which triggers tax drag) is in your fund name.</li>
              <li>For Passive Index Funds/ETFs, look for the lowest <strong>Total Expense Ratio (TER)</strong> AND the lowest <strong>Tracking Error</strong> (standard deviation of difference between index return and fund return).</li>
              <li>When buying ETFs on an exchange, always use <strong>Limit Orders</strong> near the real-time iNAV (Indicative Net Asset Value) to avoid wide bid-ask spreads.</li>
            </ul>
          </CalloutBox>
        </div>
      );

    case '5.2':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            Over 75% of active Large-Cap funds fail to beat their benchmark index after fees over a 10-year horizon. Here is how to build a core-and-satellite mutual fund portfolio and evaluate active managers quantitatively:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-bold text-cyan-400 text-sm mb-1">Core Portfolio (65%–75% of Equity)</h4>
              <p className="text-xs sm:text-sm">
                Low-cost Broad Market Index Funds (Nifty 50 / S&P 500 / Nifty Next 50) + 1 Flexi-Cap Fund with low portfolio turnover and international geographic diversification.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-bold text-purple-400 text-sm mb-1">Satellite Portfolio (25%–35% of Equity)</h4>
              <p className="text-xs sm:text-sm">
                Mid-Cap / Small-Cap Active Funds (where information inefficiency still allows alpha) or Smart-Beta Factor Funds (Momentum / Quality / Low Volatility) — only for 7+ year horizons.
              </p>
            </div>
          </div>

          <CalloutBox type="warning" title="Never Pick Funds Based on 1-Year Star Ratings">
            Instead of trailing 1-year returns, evaluate: (1) <strong>5-Year Rolling Return Consistency</strong> (% of times the fund beat the index across all rolling windows), (2) <strong>Downside Capture Ratio &lt; 90%</strong>, and (3) <strong>Portfolio Overlap &lt; 30%</strong> between your chosen funds.
          </CalloutBox>
        </div>
      );

    case '5.3':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            True portfolio resilience comes from combining assets with <strong>low or negative correlation</strong>: Equities (growth engine), Fixed Income/Debt (deflation & crash ballast), and Gold (currency debasement & geopolitical shock hedge).
          </p>

          <h3 className="text-xl font-bold text-white">
            How Gold & Bonds Actually Work in a Portfolio
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>
              <strong>Gold Is Driven by Real Interest Rates:</strong> Gold pays no coupon/dividend. When Real Interest Rates (10-Yr Treasury Yield minus Inflation) turn negative or fall, the opportunity cost of holding gold drops and gold surges. Hold <strong>8%–12% in Gold ETFs or Sovereign Gold Bonds</strong>—never buy physical jewelry for investment due to 10%–20% making charges and purity slippage.
            </li>
            <li>
              <strong>Fixed Income Duration & Credit Risk:</strong> Your debt allocation exists for safety, not chasing yield. Avoid low-rated "Credit Risk" bond funds (if a borrower defaults, NAV drops permanently) and understand <strong>Modified Duration</strong> (if a bond fund has a duration of 7 years and interest rates rise 1%, the bond fund’s price drops ~7%).
            </li>
          </ul>
        </div>
      );

    case '5.4':
      return <MutualFundExpenseWidget />;

    // ------------------------------------------------------------------------
    // MODULE 6 LESSONS
    // ------------------------------------------------------------------------
    case '6.1':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            As Benjamin Graham warned, <em>"IPO often stands for It’s Probably Overpriced."</em> Companies rarely launch an IPO when markets are depressed—promoters and Private Equity funds hire investment bankers to time IPOs during peak bull-market euphoria to get the highest possible valuation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30">
              <h4 className="font-bold text-rose-400 text-sm mb-1">Offer For Sale (OFS) — Insider Cash-Out</h4>
              <p className="text-xs sm:text-sm">
                Early VCs and Promoters sell their existing shares to the public. <strong>$0 goes into the company’s business.</strong> Treat 100% OFS IPOs at 80x P/E with extreme caution.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <h4 className="font-bold text-emerald-400 text-sm mb-1">Fresh Issue — Growth & De-leveraging</h4>
              <p className="text-xs sm:text-sm">
                New shares are created and money flows directly onto the company’s Balance Sheet to build new factories, fund CapEx, or pay off high-cost debt.
              </p>
            </div>
          </div>

          <CalloutBox type="redflag" title="The Anchor Lock-In Expiration Dump (30 & 90 Days Post-Listing)">
            Anchor institutions allotted shares before an IPO face mandatory 30-day and 90-day lock-in periods. Frequently, hyped IPO stocks experience sudden, heavy selling pressure on Day 31 and Day 91 as anchor funds dump their holdings.
          </CalloutBox>
        </div>
      );

    case '6.2':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            Understanding market microstructure—how orders execute in the exchange matching engine and how short selling works—prevents costly execution errors.
          </p>

          <ul className="list-disc pl-6 space-y-2.5 text-sm sm:text-base">
            <li>
              <strong>Market Order vs. Limit Order:</strong> A Market Order guarantees immediate execution but gives zero price guarantee (in illiquid mid/small caps, you can suffer 2%–5% slippage across a wide Bid-Ask spread). Always use <strong>Limit Orders</strong> to control your maximum entry price.
            </li>
            <li>
              <strong>Short Selling Mechanics:</strong> If you believe a stock at $500 is a fraud or wildly overvalued, you borrow shares from a broker/lender and sell them in the open market for $500 cash. If the stock falls to $300, you buy it back in the market for $300, return the borrowed shares to the lender, and pocket the $200/share profit.
            </li>
            <li>
              <strong>The Short Squeeze Trap:</strong> Because a short seller <em>must</em> eventually buy back shares to close their position, if sudden bullish news hits a heavily shorted stock, panicked short sellers rush to buy at any price—triggering a vertical <strong>Short Squeeze</strong> rally.
            </li>
          </ul>

          <CalloutBox type="redflag" title="Regulatory Reality: Naked Retail F&O Speculation">
            Official regulatory studies (including SEBI’s comprehensive study on Futures & Options traders) revealed that <strong>91% to 93% of individual retail F&O traders lose money</strong>, with average net losses exceeding ₹1.8 Lakh+ after transaction costs. Derivatives were invented for institutional hedging—not lottery tickets on expiry day.
          </CalloutBox>
        </div>
      );

    case '6.3':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            There is more than one way to make money in markets, provided your strategy has a verifiable mathematical edge and matches your temperament:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs sm:text-sm bg-slate-900/70 rounded-xl overflow-hidden border border-slate-800">
              <thead>
                <tr className="bg-slate-950 text-slate-300 border-b border-slate-800">
                  <th className="p-3.5">Strategy Style</th>
                  <th className="p-3.5">Core Philosophy & Triggers</th>
                  <th className="p-3.5">Holding Horizon & Main Risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="p-3.5 font-bold text-emerald-400">Deep Value (Graham)</td>
                  <td className="p-3.5">Buy stocks trading below Net Current Asset Value or book value with a wide Margin of Safety.</td>
                  <td className="p-3.5">2–5 Years. Risk: Value traps that never re-rate.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-blue-400">Quality Compounding & GARP (Buffett / Lynch)</td>
                  <td className="p-3.5">Buy high-ROIC moat businesses growing earnings 15–25% at a reasonable PEG (&lt;1.5).</td>
                  <td className="p-3.5">5–20+ Years. Risk: Overpaying during quality bubble phases.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-amber-400">Momentum & Trend Following</td>
                  <td className="p-3.5">Buy stocks making 52-week highs above their 200-DMA with high Relative Strength; cut losers strictly at 7–8% stop-loss.</td>
                  <td className="p-3.5">Weeks to 12 Months. Risk: Whipsaws in sideways markets.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-purple-400">Cash-Futures / Merger Arbitrage</td>
                  <td className="p-3.5">Simultaneously buy spot stock and sell overpriced monthly Futures to lock in the risk-free spread on expiry.</td>
                  <td className="p-3.5">1–30 Days. Market-neutral, fixed-income-like returns.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );

    case '6.4':
      return <LongShortPositionWidget />;

    // ------------------------------------------------------------------------
    // MODULE 7 LESSONS
    // ------------------------------------------------------------------------
    case '7.1':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            A stock chart is not a graph of corporate math—it is a real-time electrocardiogram of <strong>human greed and fear</strong>. Over the short term, prices overshoot intrinsic value on the upside during manias and undershoot violently on the downside during panics.
          </p>
          <p>
            Why does the average investor earn far less than the very mutual fund or stock they invest in (the <strong>Behavior Gap</strong>)? Because retail cash inflows peak at the top of the cycle (Euphoria) and outflows peak at the bottom (Capitulation).
          </p>
        </div>
      );

    case '7.2':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            Your human brain evolved on the African savanna to run from predators with the herd—the exact opposite of what is required to buy undervalued assets when the crowd is panicking. Know the <strong>6 Deadly Cognitive Biases</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-bold text-orange-400 text-sm mb-1">1. Loss Aversion & Disposition Effect</h4>
              <p className="text-xs sm:text-sm">
                Losses hurt <strong>2.25x more</strong> than equivalent gains feel good. This causes investors to sell winning stocks after a tiny +15% gain while holding -60% losers for years ("Wait till it comes back to my buy price").
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-bold text-rose-400 text-sm mb-1">2. Anchoring Bias</h4>
              <p className="text-xs sm:text-sm">
                Fixating on an arbitrary past price. Just because a bubble stock fell from $1,000 to $300 does NOT make it "70% off cheap"—its true intrinsic value might be $80!
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-bold text-amber-400 text-sm mb-1">3. Confirmation Bias</h4>
              <p className="text-xs sm:text-sm">
                Once you buy a stock, you only watch YouTube videos and read tweets that praise the company while ignoring bearish forensic reports. <strong>Fix:</strong> Write a pre-mortem Bear Case before buying.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-bold text-purple-400 text-sm mb-1">4. Sunk Cost & Averaging Down Losers</h4>
              <p className="text-xs sm:text-sm">
                Throwing good money after bad into a deteriorating business with rising debt just to lower your average purchase price. As Paul Tudor Jones had on his wall: <em>"Losers average losers."</em>
              </p>
            </div>
          </div>
        </div>
      );

    case '7.3':
      return (
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200">
            How do institutional algorithms and hedge funds exploit predictable retail emotion? And how do you make yourself immune?
          </p>

          <ul className="list-disc pl-6 space-y-2.5 text-sm sm:text-base">
            <li>
              <strong>Liquidity Grabs & Stop-Loss Hunting:</strong> Retail traders place clusters of obvious stop-loss orders just 1% below well-known support levels or round numbers. Institutional algorithms often push price briefly below support to trigger those stops, scoop up cheap liquidity, and reverse higher.
            </li>
            <li>
              <strong>Front-Page Media Distribution Tops:</strong> When a sector is on the cover of mainstream magazines with target upgrades from every brokerage, institutional desks use that retail FOMO volume to offload their positions.
            </li>
          </ul>

          <CalloutBox type="pro" title="Your Antidote: A Written Investment Policy Statement (IPS)">
            In CFA Portfolio Management, no capital is deployed without a written <strong>Investment Policy Statement (IPS)</strong> signed when you are calm:
            <br />1. Target Asset Allocation (e.g., 70% Equity : 20% Debt : 10% Gold) with automatic rebalancing bands (±5%).
            <br />2. Maximum single-stock exposure cap (never &gt;8%–10% of portfolio at cost).
            <br />3. Pre-defined Sell Rules (sell only if the fundamental thesis breaks, forensic red flags appear, or valuation reaches 3x historical median—never because of a macro news scare).
          </CalloutBox>
        </div>
      );

    case '7.4':
      return <MarketCycleEmotionWidget />;

    // ------------------------------------------------------------------------
    // MODULE 8 LESSONS
    // ------------------------------------------------------------------------
    case '8.1':
      return <ResearchVaultWidget />;

    default:
      return null;
  }
};

// ============================================================================
// MODULE QUIZ COMPONENT
// ============================================================================

const ModuleQuizCard = ({ module, quizScores, onSaveScore }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSelectedAnswers({});
    setSubmitted(false);
  }, [module.id]);

  if (!module.quiz || module.quiz.length === 0) return null;

  const handleSelect = (qIdx, optIdx) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSubmit = () => {
    let correct = 0;
    module.quiz.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.answer) correct++;
    });
    setSubmitted(true);
    onSaveScore(module.id, correct, module.quiz.length);
  };

  return (
    <div className="mt-10 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <Award className="w-5 h-5 text-emerald-400" />
          <h3 className="text-base sm:text-lg font-bold text-white">
            Module {module.number} Mastery Checkpoint Quiz
          </h3>
        </div>
        {quizScores[module.id] && (
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300">
            Best Score: {quizScores[module.id]}
          </span>
        )}
      </div>

      <div className="space-y-6">
        {module.quiz.map((item, qIdx) => {
          const userPick = selectedAnswers[qIdx];
          return (
            <div key={qIdx} className="space-y-2.5">
              <p className="text-sm sm:text-base font-semibold text-slate-100">
                Q{qIdx + 1}. {item.q}
              </p>
              <div className="space-y-2">
                {item.options.map((opt, optIdx) => {
                  const isPicked = userPick === optIdx;
                  const isCorrect = item.answer === optIdx;

                  let btnStyle = 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700';
                  if (!submitted && isPicked) {
                    btnStyle = 'bg-emerald-500/15 border-emerald-500 text-white';
                  } else if (submitted) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-200';
                    } else if (isPicked && !isCorrect) {
                      btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-200';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(qIdx, optIdx)}
                      className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition cursor-pointer flex items-center justify-between gap-2 ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {submitted && isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300">
                  <strong className="text-emerald-400">Explanation: </strong>
                  {item.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center gap-3">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={Object.keys(selectedAnswers).length < module.quiz.length}
            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white text-xs sm:text-sm font-bold transition cursor-pointer"
          >
            Submit Answers & Verify
          </button>
        ) : (
          <button
            onClick={() => {
              setSelectedAnswers({});
              setSubmitted(false);
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            Retry Quiz
          </button>
        )}
      </div>
    </div>
  );
};



// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================

export default function App() {
  const [activeModuleId, setActiveModuleId] = useState('mod-1');
  const [completedLessons, setCompletedLessons] = useState(['1.1']);
  const [quizScores, setQuizScores] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [deployModalOpen, setDeployModalOpen] = useState(false);

  // Total lessons count across all 8 modules
  const allLessonsFlat = useMemo(() => {
    const list = [];
    MODULES.forEach((m) => {
      m.lessons.forEach((l) => list.push({ ...l, moduleId: m.id, moduleNumber: m.number }));
    });
    return list;
  }, []);

  const progressPercentage = Math.round(
    (completedLessons.length / allLessonsFlat.length) * 100
  );

  const toggleLessonComplete = (lessonId) => {
    setCompletedLessons((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const handleSaveQuizScore = (modId, score, total) => {
    setQuizScores((prev) => ({ ...prev, [modId]: `${score}/${total}` }));
  };

  const activeModule = useMemo(
    () => MODULES.find((m) => m.id === activeModuleId) || MODULES[0],
    [activeModuleId]
  );

  const currentModuleIndex = MODULES.findIndex((m) => m.id === activeModuleId);
  const prevModule = currentModuleIndex > 0 ? MODULES[currentModuleIndex - 1] : null;
  const nextModule =
    currentModuleIndex < MODULES.length - 1 ? MODULES[currentModuleIndex + 1] : null;

  // Filter modules/lessons by search query
  const filteredModules = useMemo(() => {
    if (!searchQuery.trim()) return MODULES;
    const q = searchQuery.toLowerCase();
    return MODULES.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.subtitle.toLowerCase().includes(q) ||
        m.lessons.some(
          (l) =>
            l.title.toLowerCase().includes(q) || l.summary.toLowerCase().includes(q)
        )
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* TOP NAVIGATION HEADER */}
      <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
              aria-label="Toggle Menu"
            >
              {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-base sm:text-lg tracking-tight text-white">
                    MarketMastery
                  </span>
                  <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    CFA + Personal Finance to Institutional
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 hidden sm:block">
                  Open-Source Interactive Financial Curriculum & Simulator Handbook
                </p>
              </div>
            </div>
          </div>

          {/* Progress Bar & GitHub Pages Guide Button */}
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="hidden md:flex flex-col w-48">
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-slate-400 font-medium">Course Mastery</span>
                <span className="font-mono font-bold text-emerald-400">
                  {completedLessons.length}/{allLessonsFlat.length} ({progressPercentage}%)
                </span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  style={{ width: `${progressPercentage}%` }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-300"
                />
              </div>
            </div>

            
          </div>
        </div>
      </header>

      {/* BODY LAYOUT: SIDEBAR + MAIN CURRICULUM READER */}
      <div className="max-w-7xl w-full mx-auto flex-1 flex relative">
        {/* LEFT SIDEBAR NAVIGATION */}
        <aside
          className={`${
            mobileSidebarOpen ? 'fixed inset-y-0 left-0 z-40 w-80 bg-slate-950 pt-16' : 'hidden'
          } lg:block lg:w-80 shrink-0 border-r border-slate-800/80 p-4 overflow-y-auto lg:sticky lg:top-[61px] lg:h-[calc(100vh-61px)]`}
        >
          {/* Search Filter */}
          <div className="relative mb-4">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Filter modules & topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 px-2 mb-2">
            8 Core Modules ({allLessonsFlat.length} Lessons & Labs)
          </div>

          <nav className="space-y-2">
            {filteredModules.map((mod) => {
              const Icon = mod.icon;
              const isSelected = mod.id === activeModuleId;
              const modCompletedCount = mod.lessons.filter((l) =>
                completedLessons.includes(l.id)
              ).length;

              return (
                <div
                  key={mod.id}
                  className={`rounded-xl border transition ${
                    isSelected
                      ? 'bg-slate-900/95 border-emerald-500/40 shadow-lg'
                      : 'bg-slate-900/30 border-slate-800/70 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => {
                      setActiveModuleId(mod.id);
                      setMobileSidebarOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full text-left p-3 flex items-start gap-3 cursor-pointer"
                  >
                    <div
                      className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-mono font-bold uppercase text-emerald-400">
                          Module {mod.number}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {modCompletedCount}/{mod.lessons.length}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-white leading-snug mt-0.5">
                        {mod.title}
                      </div>
                    </div>
                  </button>

                  {/* Sub-lesson list when active */}
                  {isSelected && (
                    <div className="px-3 pb-3 pt-1 border-t border-slate-800/80 space-y-1.5">
                      {mod.lessons.map((les) => {
                        const isDone = completedLessons.includes(les.id);
                        return (
                          <div
                            key={les.id}
                            className="flex items-center justify-between gap-2 text-xs py-1 px-2 rounded-lg hover:bg-slate-800/60"
                          >
                            <a
                              href={`#lesson-${les.id}`}
                              onClick={() => setMobileSidebarOpen(false)}
                              className="text-slate-300 hover:text-white truncate flex-1"
                            >
                              <span className="font-mono text-slate-500 mr-1.5">{les.id}</span>
                              {les.title}
                            </a>
                            <button
                              onClick={() => toggleLessonComplete(les.id)}
                              title="Mark lesson completed"
                              className="cursor-pointer shrink-0"
                            >
                              {isDone ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <Circle className="w-4 h-4 text-slate-600 hover:text-slate-400" />
                              )}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 min-w-0 p-4 sm:p-8 lg:p-10 max-w-4xl mx-auto">
          {/* MODULE HERO BANNER */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border border-slate-800 p-6 sm:p-8 mb-8 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                Module {activeModule.number} of 08
              </span>
              <span className="text-xs text-slate-400">
                {activeModule.lessons.length} Deep-Dive Lessons + Interactive Lab
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {activeModule.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              {activeModule.subtitle}
            </p>
          </div>

          {/* LESSONS STREAM */}
          <div className="space-y-12">
            {activeModule.lessons.map((lesson) => {
              const isCompleted = completedLessons.includes(lesson.id);
              return (
                <section
                  key={lesson.id}
                  id={`lesson-${lesson.id}`}
                  className="scroll-mt-20 border-b border-slate-800/80 pb-10 last:border-b-0"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-emerald-400">
                          Lesson {lesson.id}
                        </span>
                        <span className="text-xs text-slate-400">{lesson.duration}</span>
                        {lesson.isTool && (
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            Interactive Simulator
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">
                        {lesson.title}
                      </h2>
                    </div>

                    <button
                      onClick={() => toggleLessonComplete(lesson.id)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition cursor-pointer shrink-0 ${
                        isCompleted
                          ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          Completed
                        </>
                      ) : (
                        <>
                          <Circle className="w-4 h-4 text-slate-500" />
                          Mark Complete
                        </>
                      )}
                    </button>
                  </div>

                  {/* Render Full Lesson Content & Embedded Simulators */}
                  <LessonContentRenderer lessonId={lesson.id} />
                </section>
              );
            })}
          </div>

          {/* MODULE QUIZ CHECKPOINT */}
          <ModuleQuizCard
            module={activeModule}
            quizScores={quizScores}
            onSaveScore={handleSaveQuizScore}
          />

          {/* NEXT / PREVIOUS MODULE PAGINATION */}
          <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            {prevModule ? (
              <button
                onClick={() => {
                  setActiveModuleId(prevModule.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex flex-col items-start p-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 transition cursor-pointer text-left"
              >
                <span className="text-xs text-slate-400">← Previous Module</span>
                <span className="text-sm font-bold text-white mt-0.5">
                  {prevModule.number}. {prevModule.title}
                </span>
              </button>
            ) : (
              <div />
            )}

            {nextModule && (
              <button
                onClick={() => {
                  setActiveModuleId(nextModule.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex flex-col items-end p-4 rounded-xl bg-emerald-600/15 hover:bg-emerald-600/25 border border-emerald-500/40 transition cursor-pointer text-right ml-auto"
              >
                <span className="text-xs text-emerald-300">Next Module →</span>
                <span className="text-sm font-bold text-white mt-0.5">
                  {nextModule.number}. {nextModule.title}
                </span>
              </button>
            )}
          </div>
        </main>
      </div>

      
    </div>
  );
}