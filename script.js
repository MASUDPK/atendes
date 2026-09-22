
/**
 * ==================================================
 * MULTI-PROJECT CONSTRUCTION LABOR ATTENDANCE & TIME TRACKING SYSTEM
 * Mobile-First হাজিরা খাতা (Site Attendance, Time Tracking & Person-Days ONLY)
 * Strictly NO financial calculations, wages, salaries, payments, or costs.
 * ==================================================
 */

// ==================================================
// START: LOCAL STORAGE
// ==================================================
const STORAGE_KEY = 'construction_labor_attendance_db_v3';

const StorageService = {
  getProjects() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Storage read error:', e);
    }
    const seed = StorageService.getInitialSeedData();
    StorageService.saveProjects(seed);
    return seed;
  },

  saveProjects(projects) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (e) {
      console.error('Storage write error:', e);
    }
  },

  getInitialSeedData() {
    return [
      {
        id: "PROJECT-001",
        name: "Jamila Bhavan-1",
        activeMonth: "September 2026",
        activeMonthKey: "2026-09",
        contractors: [
          {
            id: "CON-001",
            name: "Rahim",
            workType: "Mason + Helper",
            projectId: "PROJECT-001"
          },
          {
            id: "CON-002",
            name: "Selim",
            workType: "Painter + Helper",
            projectId: "PROJECT-001"
          }
        ],
        employees: [
          { id: "EMP-001", projectId: "PROJECT-001", name: "Abdul", phone: "01711223344", type: "Mason", contractorId: "CON-001", workType: "Mason + Helper", active: true },
          { id: "EMP-002", projectId: "PROJECT-001", name: "Hasan", phone: "", type: "Mason", contractorId: "CON-001", workType: "Mason + Helper", active: true },
          { id: "EMP-003", projectId: "PROJECT-001", name: "Karim", phone: "01822334455", type: "Mason", contractorId: "CON-001", workType: "Mason + Helper", active: true },
          { id: "EMP-004", projectId: "PROJECT-001", name: "Rony", phone: "", type: "Helper", contractorId: "CON-001", workType: "Mason + Helper", active: true },
          { id: "EMP-005", projectId: "PROJECT-001", name: "Babu", phone: "", type: "Helper", contractorId: "CON-001", workType: "Mason + Helper", active: true },
          { id: "EMP-006", projectId: "PROJECT-001", name: "Jamal", phone: "01933445566", type: "Painter", contractorId: "CON-002", workType: "Painter + Helper", active: true },
          { id: "EMP-007", projectId: "PROJECT-001", name: "Sohel", phone: "", type: "Painter", contractorId: "CON-002", workType: "Painter + Helper", active: true },
          { id: "EMP-008", projectId: "PROJECT-001", name: "Rakib", phone: "", type: "Helper", contractorId: "CON-002", workType: "Painter + Helper", active: true }
        ],
        attendance: [
          // Fri 18 Sep 2026
          { id: "ATT-001", projectId: "PROJECT-001", employeeId: "EMP-001", contractorId: "CON-001", date: "2026-09-18", status: "Present", timeIn: "08:05", timeOut: "17:10", workingMinutes: 545 },
          { id: "ATT-002", projectId: "PROJECT-001", employeeId: "EMP-002", contractorId: "CON-001", date: "2026-09-18", status: "Present", timeIn: "08:15", timeOut: "17:00", workingMinutes: 525 },
          { id: "ATT-003", projectId: "PROJECT-001", employeeId: "EMP-003", contractorId: "CON-001", date: "2026-09-18", status: "Present", timeIn: "08:10", timeOut: "16:40", workingMinutes: 510 },
          { id: "ATT-004", projectId: "PROJECT-001", employeeId: "EMP-004", contractorId: "CON-001", date: "2026-09-18", status: "Present", timeIn: "08:20", timeOut: "17:05", workingMinutes: 525 },
          { id: "ATT-005", projectId: "PROJECT-001", employeeId: "EMP-005", contractorId: "CON-001", date: "2026-09-18", status: "Present", timeIn: "08:10", timeOut: "16:55", workingMinutes: 525 },
          { id: "ATT-006", projectId: "PROJECT-001", employeeId: "EMP-006", contractorId: "CON-002", date: "2026-09-18", status: "Present", timeIn: "08:15", timeOut: "17:05", workingMinutes: 530 },
          { id: "ATT-007", projectId: "PROJECT-001", employeeId: "EMP-007", contractorId: "CON-002", date: "2026-09-18", status: "Present", timeIn: "08:20", timeOut: "17:10", workingMinutes: 530 },
          { id: "ATT-008", projectId: "PROJECT-001", employeeId: "EMP-008", contractorId: "CON-002", date: "2026-09-18", status: "Present", timeIn: "08:10", timeOut: "17:00", workingMinutes: 530 },

          // Sat 19 Sep 2026 (Today)
          { id: "ATT-009", projectId: "PROJECT-001", employeeId: "EMP-001", contractorId: "CON-001", date: "2026-09-19", status: "Present", timeIn: "08:05", timeOut: "17:10", workingMinutes: 545 },
          { id: "ATT-010", projectId: "PROJECT-001", employeeId: "EMP-002", contractorId: "CON-001", date: "2026-09-19", status: "Present", timeIn: "08:15", timeOut: "17:00", workingMinutes: 525 },
          { id: "ATT-011", projectId: "PROJECT-001", employeeId: "EMP-003", contractorId: "CON-001", date: "2026-09-19", status: "Present", timeIn: "08:00", timeOut: "16:30", workingMinutes: 510 },
          { id: "ATT-012", projectId: "PROJECT-001", employeeId: "EMP-004", contractorId: "CON-001", date: "2026-09-19", status: "Present", timeIn: "08:20", timeOut: "17:05", workingMinutes: 525 },
          { id: "ATT-013", projectId: "PROJECT-001", employeeId: "EMP-005", contractorId: "CON-001", date: "2026-09-19", status: "Present", timeIn: "08:10", timeOut: "16:55", workingMinutes: 525 },
          { id: "ATT-014", projectId: "PROJECT-001", employeeId: "EMP-006", contractorId: "CON-002", date: "2026-09-19", status: "Present", timeIn: "08:15", timeOut: "17:05", workingMinutes: 530 },
          // Currently Working (Time In exists, Time Out empty)
          { id: "ATT-015", projectId: "PROJECT-001", employeeId: "EMP-007", contractorId: "CON-002", date: "2026-09-19", status: "Present", timeIn: "08:10", timeOut: "", workingMinutes: 0 },
          { id: "ATT-016", projectId: "PROJECT-001", employeeId: "EMP-008", contractorId: "CON-002", date: "2026-09-19", status: "Present", timeIn: "08:15", timeOut: "", workingMinutes: 0 },

          // Sun 20 Sep 2026
          { id: "ATT-017", projectId: "PROJECT-001", employeeId: "EMP-001", contractorId: "CON-001", date: "2026-09-20", status: "Absent", timeIn: "", timeOut: "", workingMinutes: 0 },
          { id: "ATT-018", projectId: "PROJECT-001", employeeId: "EMP-002", contractorId: "CON-001", date: "2026-09-20", status: "Present", timeIn: "08:10", timeOut: "16:55", workingMinutes: 525 },
          { id: "ATT-019", projectId: "PROJECT-001", employeeId: "EMP-003", contractorId: "CON-001", date: "2026-09-20", status: "Present", timeIn: "08:05", timeOut: "16:35", workingMinutes: 510 },
          { id: "ATT-020", projectId: "PROJECT-001", employeeId: "EMP-004", contractorId: "CON-001", date: "2026-09-20", status: "Absent", timeIn: "", timeOut: "", workingMinutes: 0 },
          { id: "ATT-021", projectId: "PROJECT-001", employeeId: "EMP-005", contractorId: "CON-001", date: "2026-09-20", status: "Present", timeIn: "08:15", timeOut: "17:00", workingMinutes: 525 },
          { id: "ATT-022", projectId: "PROJECT-001", employeeId: "EMP-006", contractorId: "CON-002", date: "2026-09-20", status: "Present", timeIn: "08:10", timeOut: "17:00", workingMinutes: 530 },
          { id: "ATT-023", projectId: "PROJECT-001", employeeId: "EMP-007", contractorId: "CON-002", date: "2026-09-20", status: "Present", timeIn: "08:15", timeOut: "17:05", workingMinutes: 530 },
          { id: "ATT-024", projectId: "PROJECT-001", employeeId: "EMP-008", contractorId: "CON-002", date: "2026-09-20", status: "Present", timeIn: "08:05", timeOut: "16:55", workingMinutes: 530 }
        ],
        history: [
          {
            monthKey: "2026-08",
            monthLabel: "August 2026",
            closedAt: "2026-09-01T00:00:00.000Z",
            totalPresentDays: 148,
            totalAbsentDays: 12,
            totalPersonDays: 148,
            totalWorkingMinutes: 78440,
            contractorSummaries: [
              { contractorName: "Rahim", workType: "Mason + Helper", workerPersonDays: 58, helperPersonDays: 38, totalPersonDays: 96, workingMinutes: 50880 },
              { contractorName: "Selim", workType: "Painter + Helper", workerPersonDays: 34, helperPersonDays: 18, totalPersonDays: 52, workingMinutes: 27560 }
            ],
            archivedAttendance: []
          }
        ]
      },
      {
        id: "PROJECT-002",
        name: "Choto Building",
        activeMonth: "September 2026",
        activeMonthKey: "2026-09",
        contractors: [
          { id: "CON-003", name: "Kashem", workType: "Tiles Mason + Helper", projectId: "PROJECT-002" }
        ],
        employees: [
          { id: "EMP-009", projectId: "PROJECT-002", name: "Kabir", phone: "", type: "Tiles Mason", contractorId: "CON-003", workType: "Tiles Mason + Helper", active: true },
          { id: "EMP-010", projectId: "PROJECT-002", name: "Suman", phone: "", type: "Helper", contractorId: "CON-003", workType: "Tiles Mason + Helper", active: true }
        ],
        attendance: [
          { id: "ATT-025", projectId: "PROJECT-002", employeeId: "EMP-009", contractorId: "CON-003", date: "2026-09-19", status: "Present", timeIn: "08:00", timeOut: "17:00", workingMinutes: 540 },
          { id: "ATT-026", projectId: "PROJECT-002", employeeId: "EMP-010", contractorId: "CON-003", date: "2026-09-19", status: "Present", timeIn: "08:00", timeOut: "17:00", workingMinutes: 540 }
        ],
        history: []
      }
    ];
  }
};
// ==================================================
// END: LOCAL STORAGE
// ==================================================

// ==================================================
// START: 1. PROJECT MANAGEMENT
// ==================================================
const ProjectService = {
  getProjects(projects) {
    return projects || [];
  },

  getProjectById(projects, id) {
    return (projects || []).find(p => p.id === id);
  },

  createProject(projects, name) {
    const trimmed = (name || '').trim();
    if (!trimmed) {
      alert('Please enter a valid project name.');
      return null;
    }
    // Prevent duplicate project name
    const exists = projects.some(p => p.name.toLowerCase() === trimmed.toLowerCase());
    if (exists) {
      alert(`Project "${trimmed}" already exists.`);
      return null;
    }
    const id = 'PROJECT-' + String(projects.length + 1).padStart(3, '0') + '-' + Math.random().toString(36).substring(2, 5).toUpperCase();
    const newProject = {
      id,
      name: trimmed,
      activeMonth: 'September 2026',
      activeMonthKey: '2026-09',
      contractors: [],
      employees: [],
      attendance: [],
      history: []
    };
    projects.push(newProject);
    StorageService.saveProjects(projects);
    return newProject;
  },

  deleteProject(projects, projectId) {
    const index = projects.findIndex(p => p.id === projectId);
    if (index === -1) return false;
    projects.splice(index, 1);
    StorageService.saveProjects(projects);
    return true;
  }
};
// ==================================================
// END: 1. PROJECT MANAGEMENT
// ==================================================

// ==================================================
// START: 2. CONTRACTOR MANAGEMENT
// ==================================================
const ContractorService = {
  getContractors(project) {
    return (project && project.contractors) ? project.contractors : [];
  },

  addContractor(project, name, workType) {
    const trimmed = (name || '').trim();
    if (!trimmed) {
      alert('Please enter contractor/group name.');
      return null;
    }
    const duplicate = (project.contractors || []).find(c => c.name.toLowerCase() === trimmed.toLowerCase());
    if (duplicate) {
      alert(`Contractor "${trimmed}" already exists in this project.`);
      return null;
    }
    const id = 'CON-' + Date.now().toString(36).toUpperCase();
    const contractor = {
      id,
      name: trimmed,
      workType: workType || 'Mason + Helper',
      projectId: project.id
    };
    if (!project.contractors) project.contractors = [];
    project.contractors.push(contractor);
    return contractor;
  }
};
// ==================================================
// END: 2. CONTRACTOR MANAGEMENT
// ==================================================

// ==================================================
// START: 3. EMPLOYEE MANAGEMENT
// ==================================================
const EmployeeService = {
  getEmployees(project, contractorId = null, includeInactive = false) {
    if (!project) return [];
    const list = project.employees || project.workers || [];
    let filtered = list;
    if (!includeInactive) {
      filtered = filtered.filter(e => e.active !== false);
    }
    if (contractorId && contractorId !== 'ALL') {
      filtered = filtered.filter(e => e.contractorId === contractorId);
    }
    return filtered;
  },

  getAllEmployeesIncludingArchived(project) {
    if (!project) return [];
    return project.employees || project.workers || [];
  },

  getEmployeeById(project, id) {
    const list = project.employees || project.workers || [];
    return list.find(e => e.id === id);
  },

  addEmployee(project, { name, phone = '', type, contractorId, workType }) {
    const trimmedName = (name || '').trim();
    if (!trimmedName) {
      alert('Employee Name is required.');
      return null;
    }
    if (!contractorId) {
      alert('Please select a Contractor / Group.');
      return null;
    }

    const list = project.employees || project.workers || [];
    // Prevent duplicate employee in same project
    const duplicate = list.find(e => e.name.toLowerCase() === trimmedName.toLowerCase() && e.contractorId === contractorId && e.active !== false);
    if (duplicate) {
      alert(`Employee "${trimmedName}" already exists under this contractor in this project.`);
      return null;
    }

    const id = 'EMP-' + String(list.length + 1).padStart(3, '0') + '-' + Math.random().toString(36).substring(2, 5).toUpperCase();
    const employee = {
      id,
      projectId: project.id,
      name: trimmedName,
      phone: (phone || '').trim(), // OPTIONAL
      type: type || 'Mason',
      contractorId,
      workType: workType || 'Mason + Helper',
      active: true
    };

    if (!project.employees) project.employees = [];
    project.employees.push(employee);
    // Keep workers alias in sync
    project.workers = project.employees;
    return employee;
  },

  updateEmployee(project, id, { name, phone = '', type, contractorId, workType, active }) {
    const emp = EmployeeService.getEmployeeById(project, id);
    if (!emp) return false;
    emp.name = (name || '').trim() || emp.name;
    emp.phone = (phone || '').trim(); // OPTIONAL
    emp.type = type || emp.type;
    emp.contractorId = contractorId || emp.contractorId;
    emp.workType = workType || emp.workType;
    if (typeof active === 'boolean') emp.active = active;
    return true;
  },

  deleteEmployee(project, id) {
    // Safe soft-delete: preserves historical records
    const emp = EmployeeService.getEmployeeById(project, id);
    if (!emp) return false;
    emp.active = false;
    return true;
  }
};
// ==================================================
// END: 3. EMPLOYEE MANAGEMENT
// ==================================================

// ==================================================
// START: 4. DAILY ATTENDANCE
// ==================================================
const AttendanceService = {
  getRecord(project, employeeId, date) {
    if (!project || !project.attendance) return null;
    return project.attendance.find(a => (a.employeeId === employeeId || a.workerId === employeeId) && a.date === date);
  },

  saveRecord(project, { contractorId, employeeId, date, status, timeIn, timeOut, workingMinutes }) {
    if (!project.attendance) project.attendance = [];
    let record = project.attendance.find(a => (a.employeeId === employeeId || a.workerId === employeeId) && a.date === date);
    
    const normStatus = (status === '✓' || status === 'Present') ? 'Present' : 'Absent';
    const normTimeIn = normStatus === 'Present' ? (timeIn || '') : '';
    const normTimeOut = normStatus === 'Present' ? (timeOut || '') : '';
    const normMinutes = normStatus === 'Present' ? (workingMinutes || 0) : 0;

    if (record) {
      record.status = normStatus;
      record.timeIn = normTimeIn;
      record.timeOut = normTimeOut;
      record.workingMinutes = normMinutes;
      record.contractorId = contractorId;
      record.employeeId = employeeId;
      record.workerId = employeeId;
    } else {
      record = {
        id: 'ATT-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 5).toUpperCase(),
        projectId: project.id,
        contractorId,
        employeeId,
        workerId: employeeId,
        date,
        status: normStatus,
        timeIn: normTimeIn,
        timeOut: normTimeOut,
        workingMinutes: normMinutes
      };
      project.attendance.push(record);
    }
    return record;
  },

  getTodayStats(project, dateStr) {
    const records = (project.attendance || []).filter(a => a.date === dateStr);
    let present = 0;
    let absent = 0;
    let currentlyWorking = 0;
    let completedTimeOut = 0;
    let totalWorkingMinutes = 0;

    records.forEach(r => {
      const isPres = r.status === 'Present' || r.status === '✓';
      if (isPres) {
        present++;
        if (r.timeIn && !r.timeOut) {
          currentlyWorking++;
        } else if (r.timeIn && r.timeOut) {
          completedTimeOut++;
          totalWorkingMinutes += (r.workingMinutes || 0);
        }
      } else {
        absent++;
      }
    });

    return {
      present,
      absent,
      currentlyWorking,
      completedTimeOut,
      totalWorkingMinutes,
      personDays: present // 1 person present for 1 day = 1 person-day
    };
  }
};
// ==================================================
// END: 4. DAILY ATTENDANCE
// ==================================================

// ==================================================
// START: 5. TIME IN / TIME OUT
// ==================================================
const TimeService = {
  validateAndCalculate(timeIn, timeOut) {
    if (!timeIn && !timeOut) {
      return { minutes: 0, status: 'empty', label: '—' };
    }
    if (!timeIn && timeOut) {
      return { minutes: 0, status: 'invalid_no_in', label: '⚠️ Enter Time In first' };
    }
    if (timeIn && !timeOut) {
      return { minutes: 0, status: 'working', label: 'Currently Working' };
    }

    const [inH, inM] = timeIn.split(':').map(Number);
    const [outH, outM] = timeOut.split(':').map(Number);
    const diffMin = (outH * 60 + outM) - (inH * 60 + inM);

    if (diffMin < 0) {
      return {
        minutes: 0,
        status: 'invalid_order',
        label: 'Invalid Time: Time Out must be later than Time In'
      };
    }

    return {
      minutes: diffMin,
      status: 'valid',
      label: TimeService.formatMinutesToShort(diffMin)
    };
  },

  formatMinutesToShort(minutes) {
    if (!minutes || minutes <= 0) return '0h 00m';
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h ${String(m).padStart(2, '0')}m`;
  },

  formatMinutesToLong(minutes) {
    if (!minutes || minutes <= 0) return '0 hours 00 minutes';
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h} hours ${m} minutes`;
  }
};
// ==================================================
// END: 5. TIME IN / TIME OUT
// ==================================================

// ==================================================
// START: 6. WORKING HOURS
// ==================================================
const WorkingHoursService = {
  calculateTotalMinutes(records) {
    return (records || []).reduce((acc, r) => {
      const isPres = r.status === 'Present' || r.status === '✓';
      if (isPres && r.workingMinutes) {
        return acc + r.workingMinutes;
      }
      return acc;
    }, 0);
  },

  calculateAverageMinutesPerDay(totalMinutes, presentPersonDays) {
    if (!presentPersonDays || presentPersonDays === 0 || !totalMinutes || totalMinutes === 0) {
      return 0;
    }
    return Math.round(totalMinutes / presentPersonDays);
  }
};
// ==================================================
// END: 6. WORKING HOURS
// ==================================================

// ==================================================
// START: 7. WEEKLY REPORT
// ==================================================
const WeeklyReportService = {
  isFriday(dateStr) {
    if (!dateStr) return false;
    const parts = dateStr.split('-');
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    return d.getDay() === 5; // 5 = Friday
  },

  getWeekRangeFromFriday(fridayStr) {
    const parts = fridayStr.split('-');
    const fri = new Date(parts[0], parts[1] - 1, parts[2]);
    const dates = [];
    const days = ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    const daysInfo = [];

    for (let i = 0; i < 7; i++) {
      const cur = new Date(fri);
      cur.setDate(fri.getDate() + i);
      const y = cur.getFullYear();
      const m = String(cur.getMonth() + 1).padStart(2, '0');
      const d = String(cur.getDate()).padStart(2, '0');
      const ds = `${y}-${m}-${d}`;
      dates.push(ds);
      daysInfo.push({ date: ds, dayName: days[i] });
    }

    const fmt = (d) => {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    };

    const thu = new Date(fri);
    thu.setDate(fri.getDate() + 6);

    return {
      startDate: fridayStr,
      endDate: dates[6],
      formattedRange: `Fri, ${fmt(fri)} → Thu, ${fmt(thu)}`,
      datesList: dates,
      daysInfo
    };
  },

  getDetailedWeeklyRows(project, weekDatesList) {
    const employees = EmployeeService.getAllEmployeesIncludingArchived(project);
    const contractors = project.contractors || [];
    const attendance = project.attendance || [];
    const rows = [];

    const daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    weekDatesList.forEach(dateStr => {
      const parts = dateStr.split('-');
      const dObj = new Date(parts[0], parts[1] - 1, parts[2]);
      const dayName = daysMap[dObj.getDay()];

      employees.forEach(emp => {
        // Find if this employee has an attendance record for this day
        const att = attendance.find(a => (a.employeeId === emp.id || a.workerId === emp.id) && a.date === dateStr);
        const con = contractors.find(c => c.id === emp.contractorId);

        const status = att ? (att.status === 'Present' || att.status === '✓' ? 'Present' : 'Absent') : 'Absent';
        const timeIn = att && status === 'Present' ? (att.timeIn || '—') : '—';
        const timeOut = att && status === 'Present' ? (att.timeOut || (att.timeIn ? 'Currently Working' : '—')) : '—';
        const working = att && status === 'Present' && att.workingMinutes ? TimeService.formatMinutesToShort(att.workingMinutes) : '0h 00m';

        rows.push({
          date: dateStr,
          day: dayName,
          contractorName: con ? con.name : 'Unassigned',
          employeeName: emp.name,
          employeeType: emp.type,
          status,
          timeIn,
          timeOut,
          workingMinutes: att && status === 'Present' ? (att.workingMinutes || 0) : 0,
          working
        });
      });
    });

    return rows;
  },

  calculateWeeklySummary(project, weekDatesList) {
    const employees = EmployeeService.getEmployees(project, 'ALL', false);
    const contractors = project.contractors || [];
    const attendance = (project.attendance || []).filter(a => weekDatesList.includes(a.date));

    let presentPersonDays = 0;
    let absentDays = 0;
    let totalWorkingMinutes = 0;
    const tradeMinutesMap = {};

    attendance.forEach(a => {
      const isPres = a.status === 'Present' || a.status === '✓';
      if (isPres) {
        presentPersonDays++;
        const mins = a.workingMinutes || 0;
        totalWorkingMinutes += mins;
        const emp = employees.find(e => e.id === a.employeeId || e.id === a.workerId);
        const type = emp ? emp.type : 'Other';
        tradeMinutesMap[type] = (tradeMinutesMap[type] || 0) + mins;
      } else {
        absentDays++;
      }
    });

    const contractorBreakdowns = contractors.map(c => {
      const cWorkers = employees.filter(w => w.contractorId === c.id);
      const craftsmen = cWorkers.filter(w => w.type !== 'Helper');
      const helpers = cWorkers.filter(w => w.type === 'Helper');

      let craftPersonDays = 0;
      let craftWorkingMinutes = 0;
      let helperPersonDays = 0;
      let helperWorkingMinutes = 0;

      craftsmen.forEach(cw => {
        const records = attendance.filter(a => (a.employeeId === cw.id || a.workerId === cw.id) && (a.status === 'Present' || a.status === '✓'));
        craftPersonDays += records.length;
        craftWorkingMinutes += records.reduce((s, r) => s + (r.workingMinutes || 0), 0);
      });

      helpers.forEach(hw => {
        const records = attendance.filter(a => (a.employeeId === hw.id || a.workerId === hw.id) && (a.status === 'Present' || a.status === '✓'));
        helperPersonDays += records.length;
        helperWorkingMinutes += records.reduce((s, r) => s + (r.workingMinutes || 0), 0);
      });

      return {
        contractorId: c.id,
        contractorName: c.name,
        workType: c.workType,
        craftsmenCount: craftsmen.length,
        craftPersonDays,
        craftWorkingMinutes,
        helperCount: helpers.length,
        helperPersonDays,
        helperWorkingMinutes,
        totalPersons: cWorkers.length,
        totalPersonDays: craftPersonDays + helperPersonDays,
        totalWorkingMinutes: craftWorkingMinutes + helperWorkingMinutes
      };
    });

    return {
      totalEmployees: employees.length,
      presentPersonDays,
      absentDays,
      totalWorkingMinutes,
      contractorBreakdowns,
      tradeMinutesMap,
      avgMinutesPerPersonDay: WorkingHoursService.calculateAverageMinutesPerDay(totalWorkingMinutes, presentPersonDays)
    };
  }
};
// ==================================================
// END: 7. WEEKLY REPORT
// ==================================================

// ==================================================
// START: 8. MONTHLY REPORT
// ==================================================
const MonthlyReportService = {
  getDetailedMonthlyRows(project, monthKey) {
    const employees = EmployeeService.getAllEmployeesIncludingArchived(project);
    const contractors = project.contractors || [];
    const attendance = (project.attendance || []).filter(a => a.date.startsWith(monthKey));
    const daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const rows = [];
    attendance.forEach(att => {
      const emp = employees.find(e => e.id === att.employeeId || e.id === att.workerId);
      const con = contractors.find(c => c.id === (emp ? emp.contractorId : att.contractorId));
      const parts = att.date.split('-');
      const dObj = new Date(parts[0], parts[1] - 1, parts[2]);
      const dayName = daysMap[dObj.getDay()];

      const isPres = att.status === 'Present' || att.status === '✓';
      const status = isPres ? 'Present' : 'Absent';
      const timeIn = isPres ? (att.timeIn || '—') : '—';
      const timeOut = isPres ? (att.timeOut || (att.timeIn ? 'Currently Working' : '—')) : '—';
      const working = isPres && att.workingMinutes ? TimeService.formatMinutesToShort(att.workingMinutes) : '0h 00m';

      rows.push({
        date: att.date,
        day: dayName,
        contractorName: con ? con.name : 'Unassigned',
        employeeName: emp ? emp.name : 'Unknown',
        employeeType: emp ? emp.type : 'Other',
        status,
        timeIn,
        timeOut,
        workingMinutes: isPres ? (att.workingMinutes || 0) : 0,
        working
      });
    });

    return rows.sort((a, b) => b.date.localeCompare(a.date));
  },

  calculateMonthlySummary(project, monthKey) {
    const attendance = (project.attendance || []).filter(a => a.date.startsWith(monthKey));
    let totalPresent = 0;
    let totalAbsent = 0;
    let totalWorkingMinutes = 0;

    attendance.forEach(a => {
      const isPres = a.status === 'Present' || a.status === '✓';
      if (isPres) {
        totalPresent++;
        totalWorkingMinutes += (a.workingMinutes || 0);
      } else {
        totalAbsent++;
      }
    });

    return {
      totalPresent,
      totalAbsent,
      totalPersonDays: totalPresent,
      totalWorkingMinutes
    };
  }
};
// ==================================================
// END: 8. MONTHLY REPORT
// ==================================================

// ==================================================
// START: 9. CONTRACTOR REPORT
// ==================================================
const ContractorReportService = {
  getContractorData(project, contractorId, monthKey = null) {
    const con = (project.contractors || []).find(c => c.id === contractorId);
    if (!con) return null;

    const employees = EmployeeService.getAllEmployeesIncludingArchived(project).filter(e => e.contractorId === contractorId);
    const empIds = employees.map(e => e.id);

    let att = (project.attendance || []).filter(a => empIds.includes(a.employeeId || a.workerId));
    if (monthKey) {
      att = att.filter(a => a.date.startsWith(monthKey));
    }

    const masonWorkers = employees.filter(e => e.type.toLowerCase().includes('mason') && !e.type.toLowerCase().includes('helper'));
    const helperWorkers = employees.filter(e => e.type.toLowerCase().includes('helper'));

    let masonPersonDays = 0;
    let helperPersonDays = 0;
    let totalWorkingMinutes = 0;

    const daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const detailedRecords = [];

    att.forEach(a => {
      const isPres = a.status === 'Present' || a.status === '✓';
      const emp = employees.find(e => e.id === a.employeeId || e.id === a.workerId);
      const parts = a.date.split('-');
      const dObj = new Date(parts[0], parts[1] - 1, parts[2]);
      const dayName = daysMap[dObj.getDay()];

      if (isPres) {
        if (emp && emp.type.toLowerCase().includes('helper')) {
          helperPersonDays++;
        } else {
          masonPersonDays++;
        }
        totalWorkingMinutes += (a.workingMinutes || 0);
      }

      detailedRecords.push({
        date: a.date,
        day: dayName,
        employeeName: emp ? emp.name : 'Unknown',
        type: emp ? emp.type : 'Other',
        status: isPres ? 'Present' : 'Absent',
        timeIn: isPres ? (a.timeIn || '—') : '—',
        timeOut: isPres ? (a.timeOut || (a.timeIn ? 'Currently Working' : '—')) : '—',
        workingMinutes: isPres ? (a.workingMinutes || 0) : 0,
        working: isPres && a.workingMinutes ? TimeService.formatMinutesToShort(a.workingMinutes) : '0h 00m'
      });
    });

    detailedRecords.sort((a, b) => b.date.localeCompare(a.date));

    return {
      contractor: con,
      workType: con.workType,
      masonCount: masonWorkers.length,
      helperCount: helperWorkers.length,
      totalEmployees: employees.length,
      masonPersonDays,
      helperPersonDays,
      totalPersonDays: masonPersonDays + helperPersonDays,
      totalWorkingMinutes,
      detailedRecords
    };
  }
};
// ==================================================
// END: 9. CONTRACTOR REPORT
// ==================================================

// ==================================================
// START: 10. INDIVIDUAL PROFILE
// ==================================================
const IndividualProfileService = {
  getProfileData(project, employeeId, weekDatesList) {
    const emp = EmployeeService.getEmployeeById(project, employeeId);
    if (!emp) return null;
    const con = (project.contractors || []).find(c => c.id === emp.contractorId);
    const allAtt = (project.attendance || []).filter(a => a.employeeId === employeeId || a.workerId === employeeId);
    const daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Current Week Breakdown
    const weekRecords = weekDatesList.map(dateStr => {
      const rec = allAtt.find(a => a.date === dateStr);
      const parts = dateStr.split('-');
      const dObj = new Date(parts[0], parts[1] - 1, parts[2]);
      const isPres = rec && (rec.status === 'Present' || rec.status === '✓');
      return {
        date: dateStr,
        day: daysMap[dObj.getDay()],
        status: isPres ? 'Present' : 'Absent',
        timeIn: isPres ? (rec.timeIn || '—') : '—',
        timeOut: isPres ? (rec.timeOut || (rec.timeIn ? 'Currently Working' : '—')) : '—',
        workingMinutes: isPres ? (rec.workingMinutes || 0) : 0,
        working: isPres && rec.workingMinutes ? TimeService.formatMinutesToShort(rec.workingMinutes) : '0h 00m'
      };
    });

    let weekPresent = 0;
    let weekAbsent = 0;
    let weekWorkingMinutes = 0;
    weekRecords.forEach(r => {
      if (r.status === 'Present') {
        weekPresent++;
        weekWorkingMinutes += r.workingMinutes;
      } else {
        weekAbsent++;
      }
    });

    // Month Breakdown (Active Month)
    const monthKey = project.activeMonthKey || '2026-09';
    const monthAtt = allAtt.filter(a => a.date.startsWith(monthKey));
    let monthPresent = 0;
    let monthAbsent = 0;
    let monthWorkingMinutes = 0;

    const monthRecords = monthAtt.map(a => {
      const isPres = a.status === 'Present' || a.status === '✓';
      const parts = a.date.split('-');
      const dObj = new Date(parts[0], parts[1] - 1, parts[2]);
      if (isPres) {
        monthPresent++;
        monthWorkingMinutes += (a.workingMinutes || 0);
      } else {
        monthAbsent++;
      }
      return {
        date: a.date,
        day: daysMap[dObj.getDay()],
        status: isPres ? 'Present' : 'Absent',
        timeIn: isPres ? (a.timeIn || '—') : '—',
        timeOut: isPres ? (a.timeOut || (a.timeIn ? 'Currently Working' : '—')) : '—',
        workingMinutes: isPres ? (a.workingMinutes || 0) : 0,
        working: isPres && a.workingMinutes ? TimeService.formatMinutesToShort(a.workingMinutes) : '0h 00m'
      };
    }).sort((a, b) => b.date.localeCompare(a.date));

    return {
      employee: emp,
      contractor: con,
      project,
      weekRecords,
      weekSummary: {
        present: weekPresent,
        absent: weekAbsent,
        personDays: weekPresent,
        totalWorkingMinutes: weekWorkingMinutes
      },
      monthSummary: {
        present: monthPresent,
        absent: monthAbsent,
        personDays: monthPresent,
        totalWorkingMinutes: monthWorkingMinutes,
        monthRecords
      }
    };
  }
};
// ==================================================
// END: 10. INDIVIDUAL PROFILE
// ==================================================

// ==================================================
// START: 11. EXCEL EXPORT
// ==================================================
const ExcelExportService = {
  exportReport(project, type, weekInfo) {
    const projName = project.name;
    const dateRangeStr = type === 'week' ? weekInfo.formattedRange : project.activeMonth;

    // 1. Sheet 1 — Summary
    let totalEmployees = 0;
    let presentPersonDays = 0;
    let absentDays = 0;
    let totalMinutes = 0;

    let dailyRows = [];
    if (type === 'week') {
      const wSum = WeeklyReportService.calculateWeeklySummary(project, weekInfo.datesList);
      totalEmployees = wSum.totalEmployees;
      presentPersonDays = wSum.presentPersonDays;
      absentDays = wSum.absentDays;
      totalMinutes = wSum.totalWorkingMinutes;
      dailyRows = WeeklyReportService.getDetailedWeeklyRows(project, weekInfo.datesList);
    } else {
      const mSum = MonthlyReportService.calculateMonthlySummary(project, project.activeMonthKey);
      totalEmployees = EmployeeService.getEmployees(project, 'ALL', false).length;
      presentPersonDays = mSum.totalPresent;
      absentDays = mSum.totalAbsent;
      totalMinutes = mSum.totalWorkingMinutes;
      dailyRows = MonthlyReportService.getDetailedMonthlyRows(project, project.activeMonthKey);
    }

    const summaryData = [
      ["Project Name", projName],
      ["Date Range", dateRangeStr],
      ["Total Employees", totalEmployees],
      ["Present Person-Days", presentPersonDays],
      ["Absent Days", absentDays],
      ["Total Working Hours", TimeService.formatMinutesToShort(totalMinutes)],
      ["Classification", "Attendance & Time Tracking (No Wages/Salaries)"]
    ];

    // 2. Sheet 2 — Daily Attendance
    // Columns: Project Name, Date, Day, Contractor, Work Type, Employee Name, Employee Type, Status, Time In, Time Out, Working Hours, Working Minutes, Person-Day
    const dailyAttendanceHeader = [
      "Project Name", "Date", "Day", "Contractor", "Work Type", "Employee Name", "Employee Type", "Status", "Time In", "Time Out", "Working Hours", "Working Minutes", "Person-Day"
    ];
    const dailyAttendanceData = [dailyAttendanceHeader];
    dailyRows.forEach(r => {
      const emp = EmployeeService.getEmployeeById(project, r.employeeId) || {};
      const isPres = r.status === 'Present';
      dailyAttendanceData.push([
        projName,
        r.date,
        r.day,
        r.contractorName,
        emp.workType || 'Mason + Helper',
        r.employeeName,
        r.employeeType,
        r.status,
        r.timeIn,
        r.timeOut,
        r.working,
        r.workingMinutes,
        isPres ? 1 : 0
      ]);
    });

    // 3. Sheet 3 — Contractor Summary
    // Columns: Contractor, Work Type, Employee Count, Present Person-Days, Absent Days, Total Working Time
    const contractorHeader = ["Contractor", "Work Type", "Employee Count", "Present Person-Days", "Absent Days", "Total Working Time"];
    const contractorData = [contractorHeader];
    (project.contractors || []).forEach(c => {
      const cData = ContractorReportService.getContractorData(project, c.id, type === 'week' ? null : project.activeMonthKey);
      if (cData) {
        contractorData.push([
          c.name,
          c.workType,
          cData.totalEmployees,
          cData.totalPersonDays,
          0,
          TimeService.formatMinutesToShort(cData.totalWorkingMinutes)
        ]);
      }
    });

    // 4. Sheet 4 — Individual Summary
    // Columns: Employee Name, Employee Type, Contractor, Date, Day, Status, Time In, Time Out, Working Hours, Person-Day
    const individualHeader = ["Employee Name", "Employee Type", "Contractor", "Date", "Day", "Status", "Time In", "Time Out", "Working Hours", "Person-Day"];
    const individualData = [individualHeader];
    dailyRows.forEach(r => {
      individualData.push([
        r.employeeName,
        r.employeeType,
        r.contractorName,
        r.date,
        r.day,
        r.status,
        r.timeIn,
        r.timeOut,
        r.working,
        r.status === 'Present' ? 1 : 0
      ]);
    });

    // Use SheetJS (XLSX) if available
    if (window.XLSX) {
      try {
        const wb = XLSX.utils.book_new();
        const wsSummary = XLSX.utils.aoa_to_sheet(summaryData);
        const wsDaily = XLSX.utils.aoa_to_sheet(dailyAttendanceData);
        const wsContractor = XLSX.utils.aoa_to_sheet(contractorData);
        const wsIndividual = XLSX.utils.aoa_to_sheet(individualData);

        XLSX.utils.book_append_sheet(wb, wsSummary, "Summary");
        XLSX.utils.book_append_sheet(wb, wsDaily, "Daily Attendance");
        XLSX.utils.book_append_sheet(wb, wsContractor, "Contractor Summary");
        XLSX.utils.book_append_sheet(wb, wsIndividual, "Individual Summary");

        const fileName = `${projName.replace(/\s+/g, '_')}_${type.toUpperCase()}_Attendance.xlsx`;
        XLSX.writeFile(wb, fileName);
        return;
      } catch (err) {
        console.error('XLSX writing error, falling back to XML Spreadsheet:', err);
      }
    }

    // Fallback: XML Spreadsheet 2003 (.xls) with all 4 sheets
    const escapeXml = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    const makeSheetXml = (sheetName, data) => {
      let rowsXml = '';
      data.forEach(row => {
        rowsXml += '<Row>';
        row.forEach(cell => {
          const isNum = typeof cell === 'number';
          rowsXml += `<Cell><Data ss:Type="${isNum ? 'Number' : 'String'}">${escapeXml(cell)}</Data></Cell>`;
        });
        rowsXml += '</Row>';
      });
      return `<Worksheet ss:Name="${escapeXml(sheetName)}"><Table>${rowsXml}</Table></Worksheet>`;
    };

    let xml = `<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:html="http://www.w3.org/TR/REC-html40">
 ${makeSheetXml("Summary", summaryData)}
 ${makeSheetXml("Daily Attendance", dailyAttendanceData)}
 ${makeSheetXml("Contractor Summary", contractorData)}
 ${makeSheetXml("Individual Summary", individualData)}
</Workbook>`;

    const blob = new Blob([xml], { type: 'application/vnd.ms-excel;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${projName.replace(/\s+/g, '_')}_${type.toUpperCase()}_Attendance.xls`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
};
// ==================================================
// END: 11. EXCEL EXPORT
// ==================================================

// ==================================================
// START: 12. A4 PRINT & GOOGLE SHEETS
// ==================================================
const A4PrintService = {
  triggerPrint(viewName, project, weekFriday) {
    const printContainer = document.getElementById('printReport');
    if (!printContainer) {
      window.print();
      return;
    }

    const projName = project ? project.name : 'Construction Project';
    let html = '';

    if (viewName === 'weekly-report') {
      const weekInfo = WeeklyReportService.getWeekRangeFromFriday(weekFriday);
      const summary = WeeklyReportService.calculateWeeklySummary(project, weekInfo.datesList);
      const rows = WeeklyReportService.getDetailedWeeklyRows(project, weekInfo.datesList);

      html = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <div style="border-bottom: 2px solid #222; padding-bottom: 10px; margin-bottom: 15px;">
            <h1 style="margin: 0 0 5px 0; font-size: 22px; color: #111;">${projName} — Weekly Attendance Report</h1>
            <div style="font-size: 13px; color: #444;">
              <strong>Week Range:</strong> ${weekInfo.formattedRange} | 
              <strong>Generated:</strong> ${new Date().toLocaleDateString()} | 
              <strong>Classification:</strong> Attendance & Time Tracking Only (No Financial Data)
            </div>
          </div>

          <div style="display: flex; gap: 15px; margin-bottom: 15px; background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px; border-radius: 6px;">
            <div style="flex: 1;"><strong>Total Workers:</strong> ${summary.totalEmployees}</div>
            <div style="flex: 1;"><strong>Present Person-Days:</strong> ${summary.presentPersonDays}</div>
            <div style="flex: 1;"><strong>Absent Days:</strong> ${summary.absentDays}</div>
            <div style="flex: 1;"><strong>Total Working Time:</strong> ${TimeService.formatMinutesToShort(summary.totalWorkingMinutes)}</div>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 11px;">
            <thead>
              <tr style="background: #e2e8f0;">
                <th style="border: 1px solid #94a3b8; padding: 6px; text-align: left;">Date</th>
                <th style="border: 1px solid #94a3b8; padding: 6px; text-align: left;">Day</th>
                <th style="border: 1px solid #94a3b8; padding: 6px; text-align: left;">Contractor</th>
                <th style="border: 1px solid #94a3b8; padding: 6px; text-align: left;">Worker Name</th>
                <th style="border: 1px solid #94a3b8; padding: 6px; text-align: left;">Type</th>
                <th style="border: 1px solid #94a3b8; padding: 6px; text-align: center;">Status</th>
                <th style="border: 1px solid #94a3b8; padding: 6px; text-align: center;">Time In</th>
                <th style="border: 1px solid #94a3b8; padding: 6px; text-align: center;">Time Out</th>
                <th style="border: 1px solid #94a3b8; padding: 6px; text-align: center;">Working</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map(r => `
                <tr style="${r.status === 'Absent' ? 'background: #fff1f2;' : ''}">
                  <td style="border: 1px solid #cbd5e1; padding: 5px;">${r.date}</td>
                  <td style="border: 1px solid #cbd5e1; padding: 5px;">${r.day}</td>
                  <td style="border: 1px solid #cbd5e1; padding: 5px;">${r.contractorName}</td>
                  <td style="border: 1px solid #cbd5e1; padding: 5px; font-weight: bold;">${r.employeeName}</td>
                  <td style="border: 1px solid #cbd5e1; padding: 5px;">${r.employeeType}</td>
                  <td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center; font-weight: bold; color: ${r.status === 'Present' ? '#16a34a' : '#dc2626'}">${r.status}</td>
                  <td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">${r.timeIn || '—'}</td>
                  <td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">${r.timeOut || '—'}</td>
                  <td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center; font-weight: bold;">${r.working || '—'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else if (viewName === 'monthly-report') {
      const summary = MonthlyReportService.calculateMonthlySummary(project, project.activeMonthKey);
      const rows = MonthlyReportService.getDetailedMonthlyRows(project, project.activeMonthKey);

      html = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <div style="border-bottom: 2px solid #222; padding-bottom: 10px; margin-bottom: 15px;">
            <h1 style="margin: 0 0 5px 0; font-size: 22px; color: #111;">${projName} — Monthly Attendance Report</h1>
            <div style="font-size: 13px; color: #444;">
              <strong>Active Month:</strong> ${project.activeMonth} | 
              <strong>Generated:</strong> ${new Date().toLocaleDateString()} | 
              <strong>Classification:</strong> Attendance & Time Tracking Only (No Financial Data)
            </div>
          </div>

          <div style="display: flex; gap: 15px; margin-bottom: 15px; background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px; border-radius: 6px;">
            <div style="flex: 1;"><strong>Total Present Days:</strong> ${summary.totalPresent}</div>
            <div style="flex: 1;"><strong>Total Absent Days:</strong> ${summary.totalAbsent}</div>
            <div style="flex: 1;"><strong>Total Working Time:</strong> ${TimeService.formatMinutesToShort(summary.totalWorkingMinutes)}</div>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 11px;">
            <thead>
              <tr style="background: #e2e8f0;">
                <th style="border: 1px solid #94a3b8; padding: 6px; text-align: left;">Date</th>
                <th style="border: 1px solid #94a3b8; padding: 6px; text-align: left;">Day</th>
                <th style="border: 1px solid #94a3b8; padding: 6px; text-align: left;">Contractor</th>
                <th style="border: 1px solid #94a3b8; padding: 6px; text-align: left;">Worker Name</th>
                <th style="border: 1px solid #94a3b8; padding: 6px; text-align: left;">Type</th>
                <th style="border: 1px solid #94a3b8; padding: 6px; text-align: center;">Status</th>
                <th style="border: 1px solid #94a3b8; padding: 6px; text-align: center;">Time In</th>
                <th style="border: 1px solid #94a3b8; padding: 6px; text-align: center;">Time Out</th>
                <th style="border: 1px solid #94a3b8; padding: 6px; text-align: center;">Working</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map(r => `
                <tr style="${r.status === 'Absent' ? 'background: #fff1f2;' : ''}">
                  <td style="border: 1px solid #cbd5e1; padding: 5px;">${r.date}</td>
                  <td style="border: 1px solid #cbd5e1; padding: 5px;">${r.day}</td>
                  <td style="border: 1px solid #cbd5e1; padding: 5px;">${r.contractorName}</td>
                  <td style="border: 1px solid #cbd5e1; padding: 5px; font-weight: bold;">${r.employeeName}</td>
                  <td style="border: 1px solid #cbd5e1; padding: 5px;">${r.employeeType}</td>
                  <td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center; font-weight: bold; color: ${r.status === 'Present' ? '#16a34a' : '#dc2626'}">${r.status}</td>
                  <td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">${r.timeIn || '—'}</td>
                  <td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">${r.timeOut || '—'}</td>
                  <td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center; font-weight: bold;">${r.working || '—'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else {
      // General report printing from any active view
      const activeSection = document.querySelector('.view-section.active');
      const tableContent = activeSection ? activeSection.querySelector('.table-responsive, .report-table-card, .attendance-table-container') : null;
      html = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <div style="border-bottom: 2px solid #222; padding-bottom: 10px; margin-bottom: 15px;">
            <h1 style="margin: 0 0 5px 0; font-size: 22px; color: #111;">${projName} — Report</h1>
            <div style="font-size: 13px; color: #444;">Generated on ${new Date().toLocaleDateString()}</div>
          </div>
          ${tableContent ? tableContent.innerHTML : '<p>No printable table data found.</p>'}
        </div>
      `;
    }

    printContainer.innerHTML = html;
    window.print();
  }
};

const GoogleSheetsService = {
  getStoredUrl() {
    return localStorage.getItem('construction_labor_google_sheets_url') || '';
  },

  setStoredUrl(url) {
    if (url) {
      localStorage.setItem('construction_labor_google_sheets_url', url.trim());
    } else {
      localStorage.removeItem('construction_labor_google_sheets_url');
    }
  },

  async syncAttendance(project, records) {
    const url = this.getStoredUrl();
    if (!url) {
      throw new Error('Google Apps Script Web App URL is not configured.');
    }

    // Format payload strictly excluding worker phone numbers
    const payload = {
      action: 'syncAttendance',
      projectName: project.name,
      timestamp: new Date().toISOString(),
      records: records.map(r => ({
        date: r.date,
        day: r.day || '',
        contractorName: r.contractorName || '',
        employeeName: r.employeeName || '',
        employeeType: r.employeeType || '',
        status: r.status,
        timeIn: r.timeIn || '',
        timeOut: r.timeOut || '',
        working: r.working || ''
      }))
    };

    const res = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      throw new Error(`Google Sheets HTTP ${res.status}`);
    }

    return await res.json().catch(() => ({ status: 'success' }));
  }
};
// ==================================================
// END: 12. A4 PRINT & GOOGLE SHEETS
// ==================================================

// ==================================================
// START: 13. HISTORY
// ==================================================
const HistoryService = {
  closeMonth(project) {
    if (!project) return false;
    if (!project.history) project.history = [];

    const monthKey = project.activeMonthKey || '2026-09';
    const monthLabel = project.activeMonth || 'September 2026';

    const existing = project.history.find(h => h.monthKey === monthKey);
    if (existing) {
      alert(`Month ${monthLabel} has already been closed and archived.`);
      return false;
    }

    const monthAtt = (project.attendance || []).filter(a => a.date.startsWith(monthKey));
    let totalPresentDays = 0;
    let totalAbsentDays = 0;
    let totalWorkingMinutes = 0;

    monthAtt.forEach(a => {
      const isPres = a.status === 'Present' || a.status === '✓';
      if (isPres) {
        totalPresentDays++;
        totalWorkingMinutes += (a.workingMinutes || 0);
      } else {
        totalAbsentDays++;
      }
    });

    const contractorSummaries = (project.contractors || []).map(c => {
      const cWorkers = EmployeeService.getAllEmployeesIncludingArchived(project).filter(w => w.contractorId === c.id);
      const cIds = cWorkers.map(w => w.id);
      const cAtt = monthAtt.filter(a => cIds.includes(a.employeeId || a.workerId));

      let workerDays = 0;
      let helperDays = 0;
      let cMinutes = 0;

      cAtt.forEach(a => {
        const isPres = a.status === 'Present' || a.status === '✓';
        if (isPres) {
          const w = cWorkers.find(x => x.id === (a.employeeId || a.workerId));
          if (w && w.type.toLowerCase().includes('helper')) {
            helperDays++;
          } else {
            workerDays++;
          }
          cMinutes += (a.workingMinutes || 0);
        }
      });

      return {
        contractorName: c.name,
        workType: c.workType,
        workerPersonDays: workerDays,
        helperPersonDays: helperDays,
        totalPersonDays: workerDays + helperDays,
        workingMinutes: cMinutes
      };
    });

    const archiveRecord = {
      monthKey,
      monthLabel,
      closedAt: new Date().toISOString(),
      totalPresentDays,
      totalAbsentDays,
      totalPersonDays: totalPresentDays,
      totalWorkingMinutes,
      contractorSummaries,
      archivedAttendance: JSON.parse(JSON.stringify(monthAtt))
    };

    project.history.unshift(archiveRecord);

    // Advance to next month
    const [yStr, mStr] = monthKey.split('-');
    let y = parseInt(yStr, 10);
    let m = parseInt(mStr, 10) + 1;
    if (m > 12) {
      m = 1;
      y++;
    }
    const newMonthKey = `${y}-${String(m).padStart(2, '0')}`;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    project.activeMonthKey = newMonthKey;
    project.activeMonth = `${months[m - 1]} ${y}`;

    return true;
  }
};
// ==================================================
// END: 13. HISTORY
// ==================================================

// ==================================================
// START: DASHBOARD & APPLICATION CONTROLLER
// ==================================================
const App = {
  projects: [],
  currentProjectId: null,
  currentView: 'dashboard',
  selectedWeekFriday: '2026-09-18',
  todayDate: '2026-09-19',
  profileBackView: 'dashboard',
  selectedProfileWorkerId: null,
  activeHistoryMonth: null,
  pendingAbsentWorkerId: null,

  init() {
    this.projects = StorageService.getProjects();
    if (this.projects.length > 0) {
      this.currentProjectId = this.projects[0].id;
    } else {
      const p = ProjectService.createProject(this.projects, 'Jamila Bhavan-1');
      this.currentProjectId = p.id;
    }

    this.bindEvents();
    this.renderProjectDropdown();
    this.renderCurrentView();
  },

  getCurrentProject() {
    return this.projects.find(p => p.id === this.currentProjectId) || this.projects[0];
  },

  bindEvents() {
    const pSelect = document.getElementById('project-select');
    if (pSelect) {
      pSelect.addEventListener('change', (e) => {
        this.currentProjectId = e.target.value;
        this.renderCurrentView();
      });
    }

    const quickSearchBtn = document.getElementById('btn-quick-search');
    if (quickSearchBtn) {
      quickSearchBtn.addEventListener('click', () => {
        const sb = document.getElementById('search-bar-container');
        sb.classList.toggle('hidden');
        if (!sb.classList.contains('hidden')) {
          const inp = document.getElementById('global-search-input');
          inp.value = '';
          inp.focus();
          this.handleSearch('');
        }
      });
    }

    const closeSearchBtn = document.getElementById('btn-close-search');
    if (closeSearchBtn) {
      closeSearchBtn.addEventListener('click', () => {
        document.getElementById('search-bar-container').classList.add('hidden');
        document.getElementById('search-results-box').classList.add('hidden');
      });
    }

    const searchInput = document.getElementById('global-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.handleSearch(e.target.value);
      });
    }
  },

  handleSearch(query) {
    const box = document.getElementById('search-results-box');
    const q = (query || '').trim().toLowerCase();
    if (!q) {
      box.classList.add('hidden');
      box.innerHTML = '';
      return;
    }

    const proj = this.getCurrentProject();
    if (!proj) return;

    const emps = EmployeeService.getEmployees(proj, 'ALL', false);
    const cons = proj.contractors || [];

    const matchedEmps = emps.filter(e => e.name.toLowerCase().includes(q) || e.type.toLowerCase().includes(q));
    const matchedCons = cons.filter(c => c.name.toLowerCase().includes(q) || c.workType.toLowerCase().includes(q));

    if (matchedEmps.length === 0 && matchedCons.length === 0) {
      box.innerHTML = '<div class="search-item empty">No matching employees or contractors found.</div>';
      box.classList.remove('hidden');
      return;
    }

    let html = '';
    if (matchedEmps.length > 0) {
      html += '<div class="search-category-title">Employees</div>';
      matchedEmps.forEach(e => {
        const con = cons.find(c => c.id === e.contractorId);
        html += `
          <div class="search-item" onclick="App.openLaborProfile('${e.id}', 'dashboard'); document.getElementById('btn-close-search').click();">
            <strong>${e.name}</strong> (${e.type}) — Contractor: ${con ? con.name : '—'}
          </div>
        `;
      });
    }

    if (matchedCons.length > 0) {
      html += '<div class="search-category-title">Contractors</div>';
      matchedCons.forEach(c => {
        html += `
          <div class="search-item" onclick="App.openContractorDetail('${c.id}'); document.getElementById('btn-close-search').click();">
            <strong>${c.name}</strong> (${c.workType})
          </div>
        `;
      });
    }

    box.innerHTML = html;
    box.classList.remove('hidden');
  },

  navigateTo(viewName) {
    this.currentView = viewName;

    document.querySelectorAll('.bottom-nav .nav-item').forEach(btn => {
      if (btn.getAttribute('data-view') === viewName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById(`view-${viewName}`);
    if (target) {
      target.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.renderCurrentView();
  },

  renderCurrentView() {
    this.renderProjectDropdown();
    const proj = this.getCurrentProject();
    if (!proj) return;

    // Badges
    ['att-project-badge', 'history-project-badge'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = proj.name;
    });

    switch (this.currentView) {
      case 'dashboard':
        this.renderDashboard();
        break;
      case 'attendance':
        this.renderDailyAttendanceView();
        break;
      case 'contractors':
        this.renderContractorsView();
        break;
      case 'employees':
        this.renderEmployeesList();
        break;
      case 'weekly':
        this.renderWeeklyView();
        break;
      case 'monthly':
        this.renderMonthlyView();
        break;
      case 'contractor-report':
        this.renderContractorWiseReport();
        break;
      case 'contractor-detail':
        this.renderContractorDetailView();
        break;
      case 'profile':
        this.renderLaborProfileView();
        break;
      case 'history':
        this.renderHistoryView();
        break;
      case 'history-detail':
        this.renderHistoryDetailView();
        break;
    }
  },

  renderProjectDropdown() {
    const pSelect = document.getElementById('project-select');
    if (!pSelect) return;
    pSelect.innerHTML = this.projects.map(p => `
      <option value="${p.id}" ${p.id === this.currentProjectId ? 'selected' : ''}>${p.name}</option>
    `).join('');
  },

  // 1. DASHBOARD
  renderDashboard() {
    const proj = this.getCurrentProject();
    if (!proj) return;

    document.getElementById('dash-project-name').textContent = proj.name;
    document.getElementById('dash-today-date').textContent = this.formatDateDisplay(this.todayDate);

    const weekInfo = WeeklyReportService.getWeekRangeFromFriday(this.selectedWeekFriday);
    document.getElementById('dash-current-week-range').textContent = weekInfo.formattedRange;

    const emps = EmployeeService.getEmployees(proj, 'ALL', false);
    document.getElementById('stat-total-labor').textContent = emps.length;
    document.getElementById('dash-labor-count').textContent = `${emps.length} Workers`;
    document.getElementById('dash-contractor-count').textContent = `${(proj.contractors || []).length} Groups`;

    const stats = AttendanceService.getTodayStats(proj, this.todayDate);
    document.getElementById('stat-present-today').textContent = stats.present;
    document.getElementById('stat-absent-today').textContent = stats.absent;
    document.getElementById('stat-currently-working').textContent = stats.currentlyWorking;
    document.getElementById('stat-today-person-days').textContent = stats.personDays;

    // Weekly Person-Days
    const weeklyData = WeeklyReportService.calculateWeeklySummary(proj, weekInfo.datesList);
    document.getElementById('stat-weekly-person-days').textContent = weeklyData.presentPersonDays;

    // Today Time Summary Card
    document.getElementById('today-sum-present').textContent = stats.present;
    document.getElementById('today-sum-absent').textContent = stats.absent;
    document.getElementById('today-sum-working').textContent = stats.currentlyWorking;
    document.getElementById('today-sum-completed').textContent = stats.completedTimeOut;
    document.getElementById('today-sum-total-hours').textContent = TimeService.formatMinutesToShort(stats.totalWorkingMinutes);

    // Active Month Label
    document.getElementById('dash-month-name').textContent = proj.activeMonth || 'September 2026';
  },

  // 2. DAILY ATTENDANCE
  renderDailyAttendanceView() {
    const proj = this.getCurrentProject();
    if (!proj) return;

    const dateInput = document.getElementById('att-date-input');
    if (!dateInput.value) dateInput.value = this.todayDate;

    const conSelect = document.getElementById('att-contractor-select');
    const contractors = proj.contractors || [];

    conSelect.innerHTML = contractors.map(c => `
      <option value="${c.id}">${c.name} (${c.workType})</option>
    `).join('');

    this.handleAttendanceDateOrContractorChange();
  },

  handleAttendanceDateOrContractorChange() {
    const proj = this.getCurrentProject();
    if (!proj) return;

    const dateStr = document.getElementById('att-date-input').value;
    const contractorId = document.getElementById('att-contractor-select').value;
    const con = (proj.contractors || []).find(c => c.id === contractorId);

    const workTypeEl = document.getElementById('att-contractor-worktype');
    const countBadge = document.getElementById('att-labor-count-badge');

    if (con) {
      workTypeEl.textContent = con.workType;
    } else {
      workTypeEl.textContent = 'None';
    }

    const employees = EmployeeService.getEmployees(proj, contractorId, false);
    countBadge.textContent = `${employees.length} workers`;

    const wrapper = document.getElementById('attendance-list-wrapper');
    if (employees.length === 0) {
      wrapper.innerHTML = `
        <div class="empty-state">
          <p>No active employees under this contractor yet.</p>
          <button class="btn-primary-sm" onclick="App.showAddEmployeeModal()">+ Add Employee</button>
        </div>
      `;
      this.updateAttendanceSummaryCounts();
      return;
    }

    let rowsHtml = '';
    employees.forEach(emp => {
      const rec = AttendanceService.getRecord(proj, emp.id, dateStr);
      const isPresent = rec ? (rec.status === 'Present' || rec.status === '✓') : true;
      const isAbsent = rec ? (rec.status === 'Absent' || rec.status === 'A') : false;

      const timeIn = rec && isPresent ? (rec.timeIn || '') : '';
      const timeOut = rec && isPresent ? (rec.timeOut || '') : '';

      const calc = TimeService.validateAndCalculate(timeIn, timeOut);

      rowsHtml += `
        <div class="attendance-card ${isAbsent ? 'absent-mode' : ''}" id="att-card-${emp.id}" data-employee-id="${emp.id}">
          <div class="card-labor-header">
            <div class="labor-name-group">
              <strong class="labor-name">${emp.name}</strong>
              <span class="labor-type-badge">${emp.type}</span>
            </div>
            <div class="status-toggle-buttons">
              <button type="button" class="btn-status btn-status-present ${isPresent && !isAbsent ? 'active' : ''}"
                onclick="App.setRowStatus('${emp.id}', 'Present')">✓ Present</button>
              <button type="button" class="btn-status btn-status-absent ${isAbsent ? 'active' : ''}"
                onclick="App.setRowStatus('${emp.id}', 'Absent')">A Absent</button>
            </div>
          </div>

          <div class="card-time-row ${isAbsent ? 'hidden' : ''}" id="time-controls-${emp.id}">
            <div class="time-input-wrap">
              <label>Time In:</label>
              <input type="time" class="time-input" id="time-in-${emp.id}" value="${timeIn}"
                onchange="App.handleTimeInputChange('${emp.id}')" />
            </div>

            <div class="time-input-wrap">
              <label>Time Out:</label>
              <input type="time" class="time-input" id="time-out-${emp.id}" value="${timeOut}"
                onchange="App.handleTimeInputChange('${emp.id}')" />
            </div>

            <div class="time-calc-wrap">
              <span class="calc-label">Working:</span>
              <span class="calc-value ${calc.status === 'working' ? 'text-sky font-bold' : ''}" id="calc-val-${emp.id}">
                ${calc.label}
              </span>
            </div>
          </div>
        </div>
      `;
    });

    wrapper.innerHTML = rowsHtml;
    this.updateAttendanceSummaryCounts();
  },

  handleTimeInputChange(employeeId) {
    const timeIn = document.getElementById(`time-in-${employeeId}`).value;
    const timeOut = document.getElementById(`time-out-${employeeId}`).value;
    const calcEl = document.getElementById(`calc-val-${employeeId}`);

    const res = TimeService.validateAndCalculate(timeIn, timeOut);
    calcEl.textContent = res.label;

    if (res.status === 'invalid_order') {
      calcEl.className = 'calc-value text-rose font-bold';
    } else if (res.status === 'working') {
      calcEl.className = 'calc-value text-sky font-bold';
    } else {
      calcEl.className = 'calc-value font-bold text-slate';
    }
  },

  setRowStatus(employeeId, newStatus) {
    const card = document.getElementById(`att-card-${employeeId}`);
    const btnPres = card.querySelector('.btn-status-present');
    const btnAbs = card.querySelector('.btn-status-absent');
    const timeControls = document.getElementById(`time-controls-${employeeId}`);
    const timeInInput = document.getElementById(`time-in-${employeeId}`);
    const timeOutInput = document.getElementById(`time-out-${employeeId}`);

    if (newStatus === 'Absent') {
      // If employee had time entered, prompt confirmation
      if (timeInInput.value || timeOutInput.value) {
        this.pendingAbsentWorkerId = employeeId;
        this.openModal('modal-confirm-absent');
        return;
      }
      btnPres.classList.remove('active');
      btnAbs.classList.add('active');
      card.classList.add('absent-mode');
      timeControls.classList.add('hidden');
      timeInInput.value = '';
      timeOutInput.value = '';
      document.getElementById(`calc-val-${employeeId}`).textContent = '—';
    } else {
      btnPres.classList.add('active');
      btnAbs.classList.remove('active');
      card.classList.remove('absent-mode');
      timeControls.classList.remove('hidden');
      this.handleTimeInputChange(employeeId);
    }

    this.updateAttendanceSummaryCounts();
  },

  confirmAbsentChange() {
    if (!this.pendingAbsentWorkerId) return;
    const id = this.pendingAbsentWorkerId;
    const card = document.getElementById(`att-card-${id}`);
    if (card) {
      const btnPres = card.querySelector('.btn-status-present');
      const btnAbs = card.querySelector('.btn-status-absent');
      const timeControls = document.getElementById(`time-controls-${id}`);
      const timeInInput = document.getElementById(`time-in-${id}`);
      const timeOutInput = document.getElementById(`time-out-${id}`);

      btnPres.classList.remove('active');
      btnAbs.classList.add('active');
      card.classList.add('absent-mode');
      timeControls.classList.add('hidden');
      timeInInput.value = '';
      timeOutInput.value = '';
      document.getElementById(`calc-val-${id}`).textContent = '—';
    }
    this.closeModal('modal-confirm-absent');
    this.pendingAbsentWorkerId = null;
    this.updateAttendanceSummaryCounts();
  },

  markAllAttendance(targetStatus) {
    const cards = document.querySelectorAll('.attendance-card');
    cards.forEach(card => {
      const id = card.getAttribute('data-employee-id');
      if (targetStatus === 'present') {
        this.setRowStatus(id, 'Present');
      } else {
        const timeInInput = document.getElementById(`time-in-${id}`);
        const timeOutInput = document.getElementById(`time-out-${id}`);
        timeInInput.value = '';
        timeOutInput.value = '';
        const btnPres = card.querySelector('.btn-status-present');
        const btnAbs = card.querySelector('.btn-status-absent');
        btnPres.classList.remove('active');
        btnAbs.classList.add('active');
        card.classList.add('absent-mode');
        document.getElementById(`time-controls-${id}`).classList.add('hidden');
        document.getElementById(`calc-val-${id}`).textContent = '—';
      }
    });
    this.updateAttendanceSummaryCounts();
  },

  updateAttendanceSummaryCounts() {
    const cards = document.querySelectorAll('.attendance-card');
    let pres = 0;
    let abs = 0;
    cards.forEach(c => {
      if (c.querySelector('.btn-status-present.active')) pres++;
      else if (c.querySelector('.btn-status-absent.active')) abs++;
    });
    const el = document.getElementById('att-summary-counts');
    if (el) el.textContent = `Present: ${pres} | Absent: ${abs}`;
  },

  saveCurrentAttendance() {
    const proj = this.getCurrentProject();
    if (!proj) return;

    const dateStr = document.getElementById('att-date-input').value;
    const contractorId = document.getElementById('att-contractor-select').value;
    const cards = document.querySelectorAll('.attendance-card');

    let hasInvalid = false;
    cards.forEach(card => {
      const empId = card.getAttribute('data-employee-id');
      const isPres = card.querySelector('.btn-status-present.active') !== null;
      const status = isPres ? 'Present' : 'Absent';
      const timeIn = isPres ? document.getElementById(`time-in-${empId}`).value : '';
      const timeOut = isPres ? document.getElementById(`time-out-${empId}`).value : '';

      const calc = TimeService.validateAndCalculate(timeIn, timeOut);
      if (calc.status === 'invalid_order') {
        hasInvalid = true;
      }

      AttendanceService.saveRecord(proj, {
        contractorId,
        employeeId: empId,
        date: dateStr,
        status,
        timeIn,
        timeOut,
        workingMinutes: calc.minutes
      });
    });

    if (hasInvalid) {
      alert('Note: Some records have Time Out earlier than Time In. Please verify.');
    }

    StorageService.saveProjects(this.projects);
    this.showToast('Daily attendance saved successfully!');
  },

  // 3. CONTRACTORS / GROUPS
  renderContractorsView() {
    const proj = this.getCurrentProject();
    if (!proj) return;

    const grid = document.getElementById('contractors-list-grid');
    const contractors = proj.contractors || [];

    if (contractors.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <p>No contractors registered in this project.</p>
          <button class="btn-primary-sm" onclick="App.showAddContractorModal()">+ Add Contractor</button>
        </div>
      `;
      return;
    }

    const employees = EmployeeService.getEmployees(proj, 'ALL', false);

    grid.innerHTML = contractors.map(c => {
      const cWorkers = employees.filter(w => w.contractorId === c.id);
      const craftsmen = cWorkers.filter(w => w.type !== 'Helper');
      const helpers = cWorkers.filter(w => w.type === 'Helper');

      return `
        <div class="contractor-card">
          <div class="con-header">
            <div class="con-title-group">
              <strong class="con-name">${c.name}</strong>
              <span class="con-trade-badge">${c.workType}</span>
            </div>
            <button class="btn-detail-link" onclick="App.openContractorDetail('${c.id}')">Weekly Detail →</button>
          </div>
          <div class="con-body">
            <div class="con-metric-row">
              <span>Assigned Workers:</span>
              <strong>${cWorkers.length} total</strong>
            </div>
            <div class="con-metric-sub">
              <span>Craftsmen: ${craftsmen.length}</span> • <span>Helpers: ${helpers.length}</span>
            </div>
            <div class="worker-chips-preview">
              ${cWorkers.map(w => `<span class="worker-chip">${w.name} (${w.type})</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  // 4. EMPLOYEES / WORKERS
  renderEmployeesList() {
    const proj = this.getCurrentProject();
    if (!proj) return;

    const query = (document.getElementById('employee-search-filter')?.value || '').toLowerCase();
    const conFilter = document.getElementById('employee-contractor-filter')?.value || 'ALL';

    const conSelect = document.getElementById('employee-contractor-filter');
    if (conSelect && conSelect.options.length <= 1) {
      conSelect.innerHTML = '<option value="ALL">All Contractors</option>' + (proj.contractors || []).map(c => `
        <option value="${c.id}">${c.name}</option>
      `).join('');
    }

    const allEmps = EmployeeService.getAllEmployeesIncludingArchived(proj);
    let filtered = allEmps.filter(e => {
      const matchQ = e.name.toLowerCase().includes(query) || e.type.toLowerCase().includes(query);
      const matchC = conFilter === 'ALL' || e.contractorId === conFilter;
      return matchQ && matchC;
    });

    const listEl = document.getElementById('employees-members-list');
    if (filtered.length === 0) {
      listEl.innerHTML = `
        <div class="empty-state">
          <p>No employees found matching criteria.</p>
          <button class="btn-primary-sm" onclick="App.showAddEmployeeModal()">+ Add Employee</button>
        </div>
      `;
      return;
    }

    listEl.innerHTML = filtered.map(emp => {
      const con = (proj.contractors || []).find(c => c.id === emp.contractorId);
      const isActive = emp.active !== false;

      return `
        <div class="labor-member-card ${!isActive ? 'archived-worker' : ''}">
          <div class="labor-card-top">
            <div class="labor-identity">
              <strong class="labor-name">${emp.name}</strong>
              <div class="labor-tags-strip">
                <span class="labor-type-badge">${emp.type}</span>
                <span class="status-tag ${isActive ? 'present' : 'absent'}">${isActive ? 'Active' : 'Inactive'}</span>
              </div>
            </div>
            <button class="btn-profile-link" onclick="App.openLaborProfile('${emp.id}', 'employees')">Profile ➔</button>
          </div>

          <div class="labor-meta-info">
            <div class="meta-row">
              <span class="meta-label">Contractor / Group:</span>
              <strong class="meta-val">${con ? con.name : 'Unassigned'}</strong>
            </div>
            <div class="meta-row">
              <span class="meta-label">Work Type:</span>
              <span class="meta-val">${emp.workType || (con ? con.workType : '—')}</span>
            </div>
            ${emp.phone ? `
            <div class="meta-row">
              <span class="meta-label">Phone:</span>
              <span class="meta-val">${emp.phone}</span>
            </div>` : ''}
          </div>

          <div class="labor-actions-bar">
            <button class="btn-card-action" onclick="App.showEditEmployeeModal('${emp.id}')">✏️ Edit</button>
            <button class="btn-card-action danger" onclick="App.showDeleteEmployeeModal('${emp.id}')">🗑️ Delete</button>
          </div>
        </div>
      `;
    }).join('');
  },

  // 5. WEEKLY REPORT
  renderWeeklyView() {
    const proj = this.getCurrentProject();
    if (!proj) return;

    const dateInput = document.getElementById('week-start-date-input');
    if (!dateInput.value) dateInput.value = this.selectedWeekFriday;

    const weekInfo = WeeklyReportService.getWeekRangeFromFriday(this.selectedWeekFriday);
    document.getElementById('weekly-range-display').textContent = weekInfo.formattedRange;

    // Print headers
    document.getElementById('print-weekly-project-name').textContent = proj.name;
    document.getElementById('print-weekly-cycle').textContent = weekInfo.formattedRange;
    document.getElementById('print-weekly-generated').textContent = this.formatDateDisplay(this.todayDate);

    // Summary banner
    const summary = WeeklyReportService.calculateWeeklySummary(proj, weekInfo.datesList);
    document.getElementById('weekly-sum-total-emp').textContent = summary.totalEmployees;
    document.getElementById('weekly-sum-present-days').textContent = summary.presentPersonDays;
    document.getElementById('weekly-sum-absent-days').textContent = summary.absentDays;
    document.getElementById('weekly-sum-total-hours').textContent = TimeService.formatMinutesToShort(summary.totalWorkingMinutes);

    // Detailed Weekly Table
    const detailedRows = WeeklyReportService.getDetailedWeeklyRows(proj, weekInfo.datesList);
    const tbody = document.getElementById('weekly-detailed-tbody');
    if (detailedRows.length === 0) {
      tbody.innerHTML = '<tr><td colspan="9" style="text-align:center; padding:16px;">No attendance records for this week.</td></tr>';
    } else {
      tbody.innerHTML = detailedRows.map(r => `
        <tr>
          <td><strong>${r.date}</strong></td>
          <td>${r.day}</td>
          <td>${r.contractorName}</td>
          <td><strong>${r.employeeName}</strong></td>
          <td>${r.employeeType}</td>
          <td><span class="status-tag ${r.status === 'Present' ? 'present' : 'absent'}">${r.status}</span></td>
          <td>${r.timeIn}</td>
          <td>${r.timeOut}</td>
          <td><strong>${r.working}</strong></td>
        </tr>
      `).join('');
    }

    // Contractor Breakdown Cards
    const container = document.getElementById('weekly-contractor-cards-container');
    container.innerHTML = summary.contractorBreakdowns.map(cb => `
      <div class="weekly-contractor-card" onclick="App.openContractorDetail('${cb.contractorId}')">
        <div class="wcc-header">
          <div class="wcc-title-block">
            <strong class="wcc-name">${cb.contractorName}</strong>
            <span class="wcc-type">${cb.workType}</span>
          </div>
          <span class="wcc-arrow">➔</span>
        </div>
        <div class="wcc-grid">
          <div class="wcc-stat">
            <span class="label">Craftsmen Person-Days:</span>
            <strong class="val">${cb.craftPersonDays}</strong>
            <span class="sub">${cb.craftsmenCount} workers</span>
          </div>
          <div class="wcc-stat">
            <span class="label">Helper Person-Days:</span>
            <strong class="val">${cb.helperPersonDays}</strong>
            <span class="sub">${cb.helperCount} helpers</span>
          </div>
          <div class="wcc-stat">
            <span class="label">Total Person-Days:</span>
            <strong class="val text-primary">${cb.totalPersonDays}</strong>
          </div>
          <div class="wcc-stat">
            <span class="label">Total Working Time:</span>
            <strong class="val text-sky">${TimeService.formatMinutesToShort(cb.totalWorkingMinutes)}</strong>
          </div>
        </div>
      </div>
    `).join('');

    // Weekly Time Summary by Trade
    const tradeTbody = document.getElementById('weekly-time-summary-tbody');
    const trades = Object.keys(summary.tradeMinutesMap);
    if (trades.length === 0) {
      tradeTbody.innerHTML = '<tr><td colspan="2" style="text-align:center;">No working time recorded.</td></tr>';
    } else {
      tradeTbody.innerHTML = trades.map(t => `
        <tr>
          <td><strong>${t}</strong></td>
          <td><strong>${TimeService.formatMinutesToShort(summary.tradeMinutesMap[t])}</strong></td>
        </tr>
      `).join('');
    }

    document.getElementById('weekly-avg-time-display').textContent = TimeService.formatMinutesToLong(summary.avgMinutesPerPersonDay);
  },

  handleWeekDateChange() {
    const input = document.getElementById('week-start-date-input');
    const val = input.value;
    const msg = document.getElementById('week-validation-msg');

    if (!WeeklyReportService.isFriday(val)) {
      msg.classList.remove('hidden');
      return;
    }

    msg.classList.add('hidden');
    this.selectedWeekFriday = val;
    this.renderWeeklyView();
  },

  // 6. MONTHLY REPORT
  renderMonthlyView() {
    const proj = this.getCurrentProject();
    if (!proj) return;

    const monthKey = proj.activeMonthKey || '2026-09';
    const monthLabel = proj.activeMonth || 'September 2026';

    document.getElementById('monthly-badge-label').textContent = monthLabel;
    document.getElementById('print-monthly-project-name').textContent = proj.name;
    document.getElementById('print-monthly-name').textContent = monthLabel;
    document.getElementById('print-monthly-generated').textContent = this.formatDateDisplay(this.todayDate);

    const sum = MonthlyReportService.calculateMonthlySummary(proj, monthKey);
    document.getElementById('monthly-sum-present').textContent = sum.totalPresent;
    document.getElementById('monthly-sum-absent').textContent = sum.totalAbsent;
    document.getElementById('monthly-sum-persondays').textContent = sum.totalPersonDays;
    document.getElementById('monthly-sum-hours').textContent = TimeService.formatMinutesToShort(sum.totalWorkingMinutes);

    const rows = MonthlyReportService.getDetailedMonthlyRows(proj, monthKey);
    const tbody = document.getElementById('monthly-detailed-tbody');

    if (rows.length === 0) {
      tbody.innerHTML = '<tr><td colspan="9" style="text-align:center; padding:16px;">No daily attendance records for this month.</td></tr>';
    } else {
      tbody.innerHTML = rows.map(r => `
        <tr>
          <td><strong>${r.date}</strong></td>
          <td>${r.day}</td>
          <td>${r.contractorName}</td>
          <td><strong>${r.employeeName}</strong></td>
          <td>${r.employeeType}</td>
          <td><span class="status-tag ${r.status === 'Present' ? 'present' : 'absent'}">${r.status}</span></td>
          <td>${r.timeIn}</td>
          <td>${r.timeOut}</td>
          <td><strong>${r.working}</strong></td>
        </tr>
      `).join('');
    }
  },

  // 7. CONTRACTOR-WISE REPORT
  renderContractorWiseReport() {
    const proj = this.getCurrentProject();
    if (!proj) return;

    const select = document.getElementById('contractor-report-select');
    const contractors = proj.contractors || [];

    if (contractors.length === 0) {
      document.getElementById('contractor-report-content').innerHTML = `
        <div class="empty-state">
          <p>No contractors found in this project.</p>
          <button class="btn-primary-sm" onclick="App.showAddContractorModal()">+ Add Contractor</button>
        </div>
      `;
      return;
    }

    if (select.options.length === 0) {
      select.innerHTML = contractors.map(c => `
        <option value="${c.id}">${c.name} (${c.workType})</option>
      `).join('');
    }

    const selectedConId = select.value || contractors[0].id;
    const data = ContractorReportService.getContractorData(proj, selectedConId, proj.activeMonthKey);

    document.getElementById('print-contractor-project-name').textContent = proj.name;
    document.getElementById('print-contractor-generated').textContent = this.formatDateDisplay(this.todayDate);

    if (!data) return;

    const content = document.getElementById('contractor-report-content');
    content.innerHTML = `
      <div class="contractor-report-hero">
        <div class="cr-header">
          <div>
            <h3 class="cr-title">${data.contractor.name}</h3>
            <span class="cr-tag">${data.workType}</span>
          </div>
        </div>

        <div class="cr-stats-grid">
          <div class="cr-stat-item">
            <span class="label">Masons / Craftsmen:</span>
            <span class="val">${data.masonCount}</span>
          </div>
          <div class="cr-stat-item">
            <span class="label">Helpers:</span>
            <span class="val">${data.helperCount}</span>
          </div>
          <div class="cr-stat-item">
            <span class="label">Mason Person-Days:</span>
            <span class="val text-green">${data.masonPersonDays}</span>
          </div>
          <div class="cr-stat-item">
            <span class="label">Helper Person-Days:</span>
            <span class="val text-amber">${data.helperPersonDays}</span>
          </div>
          <div class="cr-stat-item">
            <span class="label">Total Person-Days:</span>
            <span class="val text-primary">${data.totalPersonDays}</span>
          </div>
          <div class="cr-stat-item">
            <span class="label">Total Working Time:</span>
            <span class="val text-sky">${TimeService.formatMinutesToShort(data.totalWorkingMinutes)}</span>
          </div>
        </div>
      </div>

      <div class="report-table-card">
        <div class="card-header-flex">
          <h3 class="card-heading">Detailed Daily Shift Records</h3>
          <span class="card-subheading">Shift logs for ${data.contractor.name}'s workers</span>
        </div>

        <div class="table-responsive">
          <table class="report-data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Employee</th>
                <th>Type</th>
                <th>Status</th>
                <th>Time In</th>
                <th>Time Out</th>
                <th>Working</th>
              </tr>
            </thead>
            <tbody>
              ${data.detailedRecords.length === 0 ? '<tr><td colspan="7" style="text-align:center;">No records for this contractor.</td></tr>' : data.detailedRecords.map(r => `
                <tr>
                  <td><strong>${r.date}</strong></td>
                  <td><strong>${r.employeeName}</strong></td>
                  <td>${r.type}</td>
                  <td><span class="status-tag ${r.status === 'Present' ? 'present' : 'absent'}">${r.status}</span></td>
                  <td>${r.timeIn}</td>
                  <td>${r.timeOut}</td>
                  <td><strong>${r.working}</strong></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // 8. CONTRACTOR WEEKLY TIME DETAIL
  openContractorDetail(contractorId) {
    this.selectedContractorId = contractorId;
    this.navigateTo('contractor-detail');
  },

  renderContractorDetailView() {
    const proj = this.getCurrentProject();
    if (!proj) return;

    const con = (proj.contractors || []).find(c => c.id === this.selectedContractorId);
    if (!con) {
      this.navigateTo('weekly');
      return;
    }

    const weekInfo = WeeklyReportService.getWeekRangeFromFriday(this.selectedWeekFriday);
    const employees = EmployeeService.getEmployees(proj, con.id, false);
    const attendance = (project => (project.attendance || []).filter(a => weekInfo.datesList.includes(a.date)))(proj);

    document.getElementById('cd-title').textContent = `${con.name} — Weekly Time Detail`;

    let totalDays = 0;
    let totalMinutes = 0;

    employees.forEach(e => {
      const records = attendance.filter(a => (a.employeeId === e.id || a.workerId === e.id) && (a.status === 'Present' || a.status === '✓'));
      totalDays += records.length;
      totalMinutes += records.reduce((s, r) => s + (r.workingMinutes || 0), 0);
    });

    const hero = document.getElementById('cd-hero');
    hero.innerHTML = `
      <div class="cd-hero-card">
        <div class="cd-hero-title">
          <h3>${con.name}</h3>
          <span class="badge-tag-orange">${con.workType}</span>
        </div>
        <div class="cd-hero-stats">
          <div><span>Week Range:</span> <strong>${weekInfo.formattedRange}</strong></div>
          <div><span>Workers:</span> <strong>${employees.length}</strong></div>
          <div><span>Week Person-Days:</span> <strong class="text-green">${totalDays}</strong></div>
          <div><span>Total Working Time:</span> <strong class="text-sky">${TimeService.formatMinutesToShort(totalMinutes)}</strong></div>
        </div>
      </div>
    `;

    const list = document.getElementById('cd-workers-list');
    list.innerHTML = employees.map(emp => {
      const records = attendance.filter(a => (a.employeeId === emp.id || a.workerId === emp.id) && (a.status === 'Present' || a.status === '✓'));
      const empMinutes = records.reduce((s, r) => s + (r.workingMinutes || 0), 0);

      return `
        <div class="cd-worker-row" onclick="App.openLaborProfile('${emp.id}', 'contractor-detail')">
          <div class="cd-worker-info">
            <strong class="cd-w-name">${emp.name}</strong>
            <span class="labor-type-badge">${emp.type}</span>
          </div>
          <div class="cd-worker-tally">
            <span class="cd-w-days text-green">✓ ${records.length} days</span>
            <span class="cd-w-time text-sky">⏱️ ${TimeService.formatMinutesToShort(empMinutes)}</span>
            <span class="cd-arrow">➔</span>
          </div>
        </div>
      `;
    }).join('');
  },

  // 9. INDIVIDUAL PROFILE
  openLaborProfile(employeeId, backView = 'dashboard') {
    this.selectedProfileWorkerId = employeeId;
    this.profileBackView = backView;
    this.navigateTo('profile');
  },

  navigateBackFromProfile() {
    this.navigateTo(this.profileBackView || 'dashboard');
  },

  renderLaborProfileView() {
    const proj = this.getCurrentProject();
    if (!proj) return;

    const weekInfo = WeeklyReportService.getWeekRangeFromFriday(this.selectedWeekFriday);
    const data = IndividualProfileService.getProfileData(proj, this.selectedProfileWorkerId, weekInfo.datesList);
    if (!data) {
      this.navigateBackFromProfile();
      return;
    }

    const { employee: emp, contractor: con, weekSummary, monthSummary } = data;

    // Print Header
    document.getElementById('print-profile-project').textContent = proj.name;
    document.getElementById('print-profile-worker').textContent = `${emp.name} (${emp.type})`;
    document.getElementById('print-profile-generated').textContent = this.formatDateDisplay(this.todayDate);

    // Hero
    const hero = document.getElementById('lp-hero');
    hero.innerHTML = `
      <div class="profile-hero-content">
        <div class="profile-avatar">${emp.name.charAt(0).toUpperCase()}</div>
        <div class="profile-info-block">
          <h3 class="profile-name">${emp.name}</h3>
          <div class="profile-chips">
            <span class="chip-type">${emp.type}</span>
            <span class="chip-con">Contractor: ${con ? con.name : '—'}</span>
            <span class="chip-trade">${emp.workType || (con ? con.workType : '—')}</span>
            <span class="status-tag ${emp.active !== false ? 'present' : 'absent'}">${emp.active !== false ? 'Active' : 'Inactive'}</span>
          </div>
        </div>
      </div>
    `;

    // Week Breakdown
    document.getElementById('lp-week-range').textContent = weekInfo.formattedRange;
    document.getElementById('lp-week-present').textContent = `${weekSummary.present} days`;
    document.getElementById('lp-week-absent').textContent = `${weekSummary.absent} days`;
    document.getElementById('lp-week-persondays').textContent = weekSummary.personDays;
    document.getElementById('lp-week-total-working').textContent = TimeService.formatMinutesToShort(weekSummary.totalWorkingMinutes);

    const weekTbody = document.getElementById('lp-week-table-body');
    weekTbody.innerHTML = data.weekRecords.map(r => `
      <tr>
        <td><strong>${r.date}</strong> (${r.day.substring(0, 3)})</td>
        <td><span class="status-tag ${r.status === 'Present' ? 'present' : 'absent'}">${r.status}</span></td>
        <td>${r.timeIn}</td>
        <td>${r.timeOut}</td>
        <td><strong>${r.working}</strong></td>
      </tr>
    `).join('');

    // Month Breakdown
    document.getElementById('lp-month-name-badge').textContent = proj.activeMonth || 'September 2026';
    document.getElementById('lp-month-present').textContent = `${monthSummary.present} days`;
    document.getElementById('lp-month-absent').textContent = `${monthSummary.absent} days`;
    document.getElementById('lp-month-persondays').textContent = monthSummary.personDays;
    document.getElementById('lp-month-total-hours').textContent = TimeService.formatMinutesToShort(monthSummary.totalWorkingMinutes);

    const monthTbody = document.getElementById('lp-month-table-body');
    if (monthSummary.monthRecords.length === 0) {
      monthTbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">No records for this month.</td></tr>';
    } else {
      monthTbody.innerHTML = monthSummary.monthRecords.map(r => `
        <tr>
          <td><strong>${r.date}</strong> (${r.day.substring(0, 3)})</td>
          <td><span class="status-tag ${r.status === 'Present' ? 'present' : 'absent'}">${r.status}</span></td>
          <td>${r.timeIn}</td>
          <td>${r.timeOut}</td>
          <td><strong>${r.working}</strong></td>
        </tr>
      `).join('');
    }
  },

  // 10. HISTORY
  renderHistoryView() {
    const proj = this.getCurrentProject();
    if (!proj) return;

    const list = document.getElementById('history-months-list');
    const history = proj.history || [];

    if (history.length === 0) {
      list.innerHTML = `
        <div class="empty-state">
          <p>No closed months yet in this project.</p>
          <p class="sub-text">When you close an active month, its complete records will be safely archived here.</p>
        </div>
      `;
      return;
    }

    list.innerHTML = history.map(h => `
      <div class="history-card" onclick="App.openHistoryDetail('${h.monthKey}')">
        <div class="history-card-header">
          <div class="history-title-group">
            <span class="folder-icon">📁</span>
            <strong class="history-month-title">${h.monthLabel}</strong>
          </div>
          <span class="badge-tag-slate">Archived</span>
        </div>
        <div class="history-card-stats">
          <div><span>Person-Days:</span> <strong class="text-green">${h.totalPersonDays}</strong></div>
          <div><span>Total Working Time:</span> <strong class="text-sky">${TimeService.formatMinutesToShort(h.totalWorkingMinutes)}</strong></div>
          <div><span>Contractors:</span> <strong>${(h.contractorSummaries || []).length}</strong></div>
        </div>
        <div class="history-card-action">
          <span>Inspect Historical Results</span>
          <span class="arrow">➔</span>
        </div>
      </div>
    `).join('');
  },

  openHistoryDetail(monthKey) {
    this.activeHistoryMonth = monthKey;
    this.navigateTo('history-detail');
  },

  renderHistoryDetailView() {
    const proj = this.getCurrentProject();
    if (!proj) return;

    const h = (proj.history || []).find(x => x.monthKey === this.activeHistoryMonth);
    if (!h) {
      this.navigateTo('history');
      return;
    }

    document.getElementById('hd-title').textContent = `History: ${h.monthLabel}`;

    const weeklyContainer = document.getElementById('hd-weekly-container');
    weeklyContainer.innerHTML = (h.contractorSummaries || []).map(cs => `
      <div class="weekly-contractor-card">
        <div class="wcc-header">
          <div class="wcc-title-block">
            <strong class="wcc-name">${cs.contractorName}</strong>
            <span class="wcc-type">${cs.workType}</span>
          </div>
        </div>
        <div class="wcc-grid">
          <div class="wcc-stat">
            <span class="label">Craftsmen Person-Days:</span>
            <strong class="val">${cs.workerPersonDays}</strong>
          </div>
          <div class="wcc-stat">
            <span class="label">Helper Person-Days:</span>
            <strong class="val">${cs.helperPersonDays}</strong>
          </div>
          <div class="wcc-stat">
            <span class="label">Total Person-Days:</span>
            <strong class="val text-primary">${cs.totalPersonDays}</strong>
          </div>
          <div class="wcc-stat">
            <span class="label">Total Working Time:</span>
            <strong class="val text-sky">${TimeService.formatMinutesToShort(cs.workingMinutes)}</strong>
          </div>
        </div>
      </div>
    `).join('');

    const dailyContainer = document.getElementById('hd-daily-container');
    const attList = h.archivedAttendance || [];
    if (attList.length === 0) {
      dailyContainer.innerHTML = '<div class="empty-state"><p>No archived daily attendance found.</p></div>';
    } else {
      dailyContainer.innerHTML = `
        <div class="table-responsive">
          <table class="report-data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
                <th>Time In</th>
                <th>Time Out</th>
                <th>Working Hours</th>
              </tr>
            </thead>
            <tbody>
              ${attList.map(a => `
                <tr>
                  <td><strong>${a.date}</strong></td>
                  <td><span class="status-tag ${a.status === 'Present' || a.status === '✓' ? 'present' : 'absent'}">${a.status}</span></td>
                  <td>${a.timeIn || '—'}</td>
                  <td>${a.timeOut || '—'}</td>
                  <td><strong>${TimeService.formatMinutesToShort(a.workingMinutes)}</strong></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    const laborContainer = document.getElementById('hd-labor-container');
    laborContainer.innerHTML = `
      <div class="profile-card">
        <p>Total Present Days in this archived cycle: <strong class="text-green">${h.totalPresentDays}</strong></p>
        <p>Total Working Time: <strong class="text-sky">${TimeService.formatMinutesToShort(h.totalWorkingMinutes)}</strong></p>
      </div>
    `;

    const totalsContainer = document.getElementById('hd-totals-container');
    totalsContainer.innerHTML = `
      <div class="grand-weekly-total-card">
        <div class="grand-header">
          <h3>Month Total Overview</h3>
        </div>
        <div class="grand-stats-row">
          <div class="grand-stat-box">
            <span class="stat-type">Total Person-Days:</span>
            <strong>${h.totalPersonDays}</strong>
          </div>
          <div class="grand-stat-box">
            <span class="stat-type">Total Working Hours:</span>
            <strong>${TimeService.formatMinutesToShort(h.totalWorkingMinutes)}</strong>
          </div>
        </div>
      </div>
    `;

    this.switchHistoryTab('hd-tab-weekly');
  },

  switchHistoryTab(tabId) {
    document.querySelectorAll('.hd-tab').forEach(b => {
      if (b.getAttribute('data-tab') === tabId) b.classList.add('active');
      else b.classList.remove('active');
    });

    document.querySelectorAll('.hd-tab-content').forEach(c => {
      if (c.id === tabId) c.classList.add('active');
      else c.classList.remove('active');
    });
  },

  // MODALS & OPERATIONS
  openModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.classList.remove('hidden');
  },

  closeModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.classList.add('hidden');
  },

  showCurrentlyWorkingModal() {
    const proj = this.getCurrentProject();
    if (!proj) return;

    const list = document.getElementById('currently-working-list');
    const records = (proj.attendance || []).filter(a => a.date === this.todayDate && (a.status === 'Present' || a.status === '✓') && a.timeIn && !a.timeOut);

    document.getElementById('cw-modal-count').textContent = `${records.length} on site`;

    if (records.length === 0) {
      list.innerHTML = `
        <div class="empty-state">
          <p>No workers are currently working without a Time Out.</p>
        </div>
      `;
    } else {
      list.innerHTML = records.map(r => {
        const emp = EmployeeService.getEmployeeById(proj, r.employeeId || r.workerId);
        const con = (proj.contractors || []).find(c => c.id === (emp ? emp.contractorId : r.contractorId));
        return `
          <div class="cw-item">
            <div>
              <strong class="cw-item-name">${emp ? emp.name : 'Worker'}</strong>
              <span class="cw-item-contractor">${con ? con.name : ''} • ${emp ? emp.type : ''}</span>
            </div>
            <div class="cw-item-time">
              <span class="cw-started-badge">Time In: ${r.timeIn}</span>
            </div>
          </div>
        `;
      }).join('');
    }

    this.openModal('modal-currently-working');
  },

  createNewProject() {
    const input = document.getElementById('new-project-name');
    const name = input.value;
    const p = ProjectService.createProject(this.projects, name);
    if (p) {
      this.currentProjectId = p.id;
      input.value = '';
      this.closeModal('modal-add-project');
      this.renderCurrentView();
      this.showToast(`Project "${p.name}" created!`);
    }
  },

  showDeleteProjectModal() {
    const proj = this.getCurrentProject();
    if (!proj) return;
    if (this.projects.length <= 1) {
      alert('Cannot delete the only remaining project. Please create another project first.');
      return;
    }
    document.getElementById('delete-project-label').textContent = proj.name;
    this.openModal('modal-delete-project');
  },

  confirmDeleteProject() {
    const proj = this.getCurrentProject();
    if (!proj) return;
    const deletedName = proj.name;
    const ok = ProjectService.deleteProject(this.projects, proj.id);
    if (ok) {
      this.currentProjectId = this.projects[0].id;
      this.closeModal('modal-delete-project');
      this.renderCurrentView();
      this.showToast(`Project "${deletedName}" deleted permanently.`);
    }
  },

  showAddContractorModal() {
    document.getElementById('new-contractor-name').value = '';
    this.openModal('modal-add-contractor');
  },

  createNewContractor() {
    const proj = this.getCurrentProject();
    if (!proj) return;
    const name = document.getElementById('new-contractor-name').value;
    const workType = document.getElementById('new-contractor-worktype').value;

    const con = ContractorService.addContractor(proj, name, workType);
    if (con) {
      StorageService.saveProjects(this.projects);
      this.closeModal('modal-add-contractor');
      this.renderCurrentView();
      this.showToast(`Contractor "${con.name}" saved!`);
    }
  },

  showAddEmployeeModal() {
    const proj = this.getCurrentProject();
    if (!proj) return;
    const contractors = proj.contractors || [];
    if (contractors.length === 0) {
      alert('Please add at least one Contractor / Group first before adding employees.');
      this.showAddContractorModal();
      return;
    }

    document.getElementById('new-labor-name').value = '';
    document.getElementById('new-labor-phone').value = ''; // Optional

    const select = document.getElementById('new-labor-contractor');
    select.innerHTML = contractors.map(c => `<option value="${c.id}">${c.name} (${c.workType})</option>`).join('');

    this.handleNewLaborContractorChange();
    this.openModal('modal-add-labor');
  },

  handleNewLaborContractorChange() {
    const proj = this.getCurrentProject();
    if (!proj) return;
    const conId = document.getElementById('new-labor-contractor').value;
    const con = (proj.contractors || []).find(c => c.id === conId);
    document.getElementById('new-labor-worktype').value = con ? con.workType : 'Mason + Helper';
  },

  createNewEmployee() {
    const proj = this.getCurrentProject();
    if (!proj) return;

    const name = document.getElementById('new-labor-name').value;
    const phone = document.getElementById('new-labor-phone').value; // OPTIONAL
    const conId = document.getElementById('new-labor-contractor').value;
    const type = document.getElementById('new-labor-type').value;
    const workType = document.getElementById('new-labor-worktype').value;

    const emp = EmployeeService.addEmployee(proj, {
      name,
      phone,
      type,
      contractorId: conId,
      workType
    });

    if (emp) {
      StorageService.saveProjects(this.projects);
      this.closeModal('modal-add-labor');
      this.renderCurrentView();
      this.showToast(`Employee "${emp.name}" saved!`);
    }
  },

  showEditEmployeeModal(employeeId) {
    const proj = this.getCurrentProject();
    if (!proj) return;

    const emp = EmployeeService.getEmployeeById(proj, employeeId);
    if (!emp) return;

    document.getElementById('edit-labor-id').value = emp.id;
    document.getElementById('edit-labor-name').value = emp.name;
    document.getElementById('edit-labor-phone').value = emp.phone || ''; // Optional
    document.getElementById('edit-labor-type').value = emp.type;
    document.getElementById('edit-labor-active').value = String(emp.active !== false);

    const conSelect = document.getElementById('edit-labor-contractor');
    conSelect.innerHTML = (proj.contractors || []).map(c => `
      <option value="${c.id}" ${c.id === emp.contractorId ? 'selected' : ''}>${c.name} (${c.workType})</option>
    `).join('');

    this.handleEditLaborContractorChange();
    this.openModal('modal-edit-labor');
  },

  handleEditLaborContractorChange() {
    const proj = this.getCurrentProject();
    if (!proj) return;
    const conId = document.getElementById('edit-labor-contractor').value;
    const con = (proj.contractors || []).find(c => c.id === conId);
    document.getElementById('edit-labor-worktype').value = con ? con.workType : 'Mason + Helper';
  },

  saveEditEmployee() {
    const proj = this.getCurrentProject();
    if (!proj) return;

    const id = document.getElementById('edit-labor-id').value;
    const name = document.getElementById('edit-labor-name').value;
    const phone = document.getElementById('edit-labor-phone').value; // Optional
    const conId = document.getElementById('edit-labor-contractor').value;
    const type = document.getElementById('edit-labor-type').value;
    const workType = document.getElementById('edit-labor-worktype').value;
    const active = document.getElementById('edit-labor-active').value === 'true';

    const ok = EmployeeService.updateEmployee(proj, id, {
      name,
      phone,
      type,
      contractorId: conId,
      workType,
      active
    });

    if (ok) {
      StorageService.saveProjects(this.projects);
      this.closeModal('modal-edit-labor');
      this.renderCurrentView();
      this.showToast('Employee updated successfully!');
    }
  },

  showDeleteEmployeeModal(employeeId) {
    const proj = this.getCurrentProject();
    if (!proj) return;
    const emp = EmployeeService.getEmployeeById(proj, employeeId);
    if (!emp) return;

    document.getElementById('delete-labor-id').value = emp.id;
    document.getElementById('delete-labor-name').textContent = emp.name;
    this.openModal('modal-delete-labor');
  },

  confirmDeleteEmployee() {
    const proj = this.getCurrentProject();
    if (!proj) return;
    const id = document.getElementById('delete-labor-id').value;
    const ok = EmployeeService.deleteEmployee(proj, id);
    if (ok) {
      StorageService.saveProjects(this.projects);
      this.closeModal('modal-delete-labor');
      this.renderCurrentView();
      this.showToast('Employee deleted (archived, historical records preserved).');
    }
  },

  showCloseMonthModal() {
    const proj = this.getCurrentProject();
    if (!proj) return;
    document.getElementById('close-month-label').textContent = proj.activeMonth || 'September 2026';
    this.openModal('modal-close-month');
  },

  confirmCloseMonth() {
    const proj = this.getCurrentProject();
    if (!proj) return;
    const ok = HistoryService.closeMonth(proj);
    if (ok) {
      StorageService.saveProjects(this.projects);
      this.closeModal('modal-close-month');
      this.renderCurrentView();
      this.showToast('Month archived and closed successfully!');
    }
  },

  showExcelExportModal() {
    this.openModal('modal-excel-export');
  },

  exportExcelForType(type) {
    const proj = this.getCurrentProject();
    if (!proj) return;
    const weekInfo = WeeklyReportService.getWeekRangeFromFriday(this.selectedWeekFriday);
    ExcelExportService.exportReport(proj, type, weekInfo);
    this.closeModal('modal-excel-export');
    this.showToast('Excel file generated and downloading!');
  },

  printReport(viewName) {
    const proj = this.getCurrentProject();
    if (viewName && this.currentView !== viewName) {
      this.navigateTo(viewName);
    }
    setTimeout(() => {
      A4PrintService.triggerPrint(viewName || this.currentView, proj, this.selectedWeekFriday);
    }, 150);
  },

  openGoogleSheetsModal() {
    const input = document.getElementById('google-sheets-script-url');
    if (input) {
      input.value = GoogleSheetsService.getStoredUrl();
    }
    const status = document.getElementById('google-sheets-status');
    if (status) {
      status.style.display = 'none';
    }
    this.openModal('modal-google-sheets');
  },

  saveGoogleSheetsUrl() {
    const input = document.getElementById('google-sheets-script-url');
    const url = input ? input.value.trim() : '';
    GoogleSheetsService.setStoredUrl(url);
    const status = document.getElementById('google-sheets-status');
    if (status) {
      status.style.display = 'block';
      status.style.background = '#dcfce7';
      status.style.color = '#15803d';
      status.textContent = url ? '✓ Web App URL saved successfully!' : 'URL cleared.';
    }
    this.showToast(url ? 'Google Sheets URL saved' : 'URL cleared');
  },

  async syncWithGoogleSheets() {
    const proj = this.getCurrentProject();
    if (!proj) return;

    const status = document.getElementById('google-sheets-status');
    if (!status) return;

    status.style.display = 'block';
    status.style.background = '#e0f2fe';
    status.style.color = '#0369a1';
    status.textContent = 'Syncing attendance records...';

    try {
      const weekInfo = WeeklyReportService.getWeekRangeFromFriday(this.selectedWeekFriday);
      const rows = WeeklyReportService.getDetailedWeeklyRows(proj, weekInfo.datesList);
      
      await GoogleSheetsService.syncAttendance(proj, rows);

      status.style.background = '#dcfce7';
      status.style.color = '#15803d';
      status.textContent = `✓ Successfully synced ${rows.length} attendance records to Google Sheets!`;
      this.showToast(`Synced ${rows.length} records to Google Sheets!`);
    } catch (err) {
      status.style.background = '#fee2e2';
      status.style.color = '#b91c1c';
      status.textContent = `Sync Error: ${err.message}. Ensure your Google Apps Script is deployed as Web App with access set to "Anyone".`;
    }
  },

  formatDateDisplay(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${parts[2]} ${months[parseInt(parts[1], 10) - 1]} ${parts[0]}`;
  },

  showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 2400);
  }
};

// Start application when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  App.init();
});
