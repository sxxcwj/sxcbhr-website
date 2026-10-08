export interface ConsultingCase {
  kind: 'example' | 'client';
  id: string;
  title: string;
  client: string;
  background: string;
  services: string[];
  challenge: string;
  approach: string[];
  outcomes: string[];
}

// Client cases require project facts confirmed by the user for publication.
// Examples describe hypothetical situations and possible work, never past results.
// An empty list hides the section and its navigation links.
export const consultingCases: ConsultingCase[] = [
  {
    kind: 'example',
    id: 'organization-performance',
    title: '制造企业：把岗位职责与绩效目标连接起来',
    client: '制造企业（示例情境）',
    background: '生产、质量、设备等部门需要协同推进交付。企业希望在业务发展过程中，进一步明确岗位责任，并使绩效管理围绕共同的业务目标开展。',
    services: ['组织架构优化', '绩效管理体系'],
    challenge: '部门之间的职责边界不够清晰，一些事项依赖反复协调；考核指标与岗位实际工作联系不足，管理者难以将考核结果转化为具体改进行动。',
    approach: [
      '访谈关键岗位并梳理业务流程，明确部门分工、决策权限和需要协作的关键事项。',
      '从企业业务重点出发，将目标分解到部门与岗位，讨论指标定义、数据来源和评价规则。',
      '选择适合的团队试用方案，通过目标沟通、过程反馈和阶段复盘，检验方案是否便于执行。',
    ],
    outcomes: ['岗位职责与跨部门协作边界说明。', '部门及岗位目标分解、绩效指标设计方案。', '绩效沟通、复盘与改进工作的流程及配套表单。'],
  },
  {
    kind: 'example',
    id: 'talent-pipeline',
    title: '成长型企业：为关键岗位建立人才梯队',
    client: '成长型企业（示例情境）',
    background: '企业在拓展业务的同时，需要为关键岗位准备后备力量，并让员工的发展方向与组织未来的能力需要相衔接。',
    services: ['人才战略规划', '领导力发展'],
    challenge: '关键岗位的能力要求尚不统一，不同管理者对人才的评价口径存在差异；培养安排与岗位需要衔接不足，后备人才的准备程度缺少清晰判断。',
    approach: [
      '结合业务规划识别关键岗位，梳理岗位任务、能力要求和可能出现的人才缺口。',
      '围绕统一的评价标准开展人才盘点，区分当前绩效、发展潜力与岗位准备程度。',
      '针对培养需要设计岗位实践、辅导和学习安排，明确阶段目标、责任人与复盘方式。',
    ],
    outcomes: ['关键岗位清单与岗位能力要求。', '人才盘点框架及后备人才评估与培养建议。', '个人发展计划、培养任务和阶段跟进机制。'],
  },
  {
    kind: 'example',
    id: 'manager-development',
    title: '服务企业：让中层管理者形成共同的管理方式',
    client: '服务企业（示例情境）',
    background: '服务交付需要不同团队持续协同。企业希望帮助中层管理者建立共同的管理语言，使目标沟通、团队协作与员工发展更有章法。',
    services: ['领导力发展', '企业文化建设'],
    challenge: '部分管理工作依靠个人经验，目标沟通和反馈方式不一致；培训内容与日常管理场景连接不足，学习后的行动缺少持续跟进。',
    approach: [
      '访谈管理者并收集典型管理场景，识别目标设定、授权、反馈及协作中的具体困难。',
      '围绕真实工作任务设计管理工作坊，将企业倡导的行为要求转化为可练习的管理动作。',
      '安排工作中的行动实践和辅导复盘，帮助管理者把学习内容应用到团队日常管理。',
    ],
    outcomes: ['中层管理能力发展重点与行为要求。', '目标沟通、授权和反馈等主题的工作坊方案。', '行动实践清单、辅导安排与学习复盘工具。'],
  },
];

export const onlyExampleCases = consultingCases.length > 0 && consultingCases.every(study => study.kind === 'example');
export const caseNavigationLabel = onlyExampleCases ? '案例示例' : '咨询案例';
