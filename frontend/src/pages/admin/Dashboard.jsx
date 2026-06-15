import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarCheck,
  FaFileInvoiceDollar,
  FaUsers,
  FaAward,
  FaArrowRight,
  FaHourglassHalf,
  FaCheckCircle,
} from "react-icons/fa";
import { api } from "../../utils/api";

const Dashboard = () => {
  const [surveys, setSurveys] = useState([]);
  const [quotations, setQuotations] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
    try {
      const inquiries = await api.getInquiries();
      console.log("Inquiries:", inquiries);

      const quotations = await api.getQuotations();
      console.log("Quotations:", quotations);

      setSurveys(inquiries);
      setQuotations(quotations);
    } catch (err) {
      console.error("API Error:", err);
    }
  };

  fetchData();
}, []);

  // Compute Metrics
  const totalLeads = quotations.length;
  const totalSurveys = surveys.length;
  const pendingSurveys = surveys.filter((s) => s.status === "Scheduled").length;
  const completedSurveys = surveys.filter((s) => s.status === "Completed").length;
  const wonLeads = quotations.filter((q) => q.status === "Closed Win").length;
  const contactedLeads = quotations.filter((q) => q.status === "Contacted" || q.status === "In Progress").length;

  const surveyCompletionRate = totalSurveys 
    ? Math.round((completedSurveys / totalSurveys) * 100) 
    : 0;

  const wonConversionRate = totalLeads 
    ? Math.round((wonLeads / totalLeads) * 100) 
    : 0;

  const recentSurveys = surveys.slice(0, 3);
  const recentQuotes = quotations.slice(0, 3);

  // Status Badge Helper
  const getSurveyStatusBadge = (status) => {
    switch (status) {
      case "Scheduled":
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">Scheduled</span>;
      case "Completed":
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">Completed</span>;
      case "Cancelled":
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-700">Cancelled</span>;
      default:
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">{status}</span>;
    }
  };

  const getQuoteStatusBadge = (status) => {
    switch (status) {
      case "New":
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-700">New</span>;
      case "Contacted":
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-100 text-[#00539B]">Contacted</span>;
      case "In Progress":
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-700">In Progress</span>;
      case "Closed Win":
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">Won</span>;
      case "Closed Lost":
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-700">Lost</span>;
      default:
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">{status}</span>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Total Quotation Leads */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group">
          <div>
            <p className="text-gray-400 font-medium text-sm">Quotation Leads</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">{totalLeads}</h3>
            <span className="text-xs text-orange-500 font-semibold mt-1 inline-block">
              {contactedLeads} In-Progress / Contacted
            </span>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#ff7300] flex items-center justify-center group-hover:scale-110 transition duration-300">
            <FaFileInvoiceDollar size={24} />
          </div>
        </div>

        {/* Total Surveys */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group">
          <div>
            <p className="text-gray-400 font-medium text-sm">Site Surveys</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">{totalSurveys}</h3>
            <span className="text-xs text-blue-600 font-semibold mt-1 inline-block">
              {pendingSurveys} Pending Appointments
            </span>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#00539B] flex items-center justify-center group-hover:scale-110 transition duration-300">
            <FaCalendarCheck size={24} />
          </div>
        </div>

        {/* Won Conversions */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group">
          <div>
            <p className="text-gray-400 font-medium text-sm">Closed Deals (Won)</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">{wonLeads}</h3>
            <span className="text-xs text-green-600 font-semibold mt-1 inline-block">
              {wonConversionRate}% Conversion Rate
            </span>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center group-hover:scale-110 transition duration-300">
            <FaAward size={24} />
          </div>
        </div>

        {/* Completed Surveys */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group">
          <div>
            <p className="text-gray-400 font-medium text-sm">Completed Surveys</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">{completedSurveys}</h3>
            <span className="text-xs text-indigo-600 font-semibold mt-1 inline-block">
              {surveyCompletionRate}% Survey Completion
            </span>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition duration-300">
            <FaCheckCircle size={24} />
          </div>
        </div>

      </div>

      {/* Visual Progress Stats Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Leads Performance Tracker */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h4 className="font-bold text-gray-800 text-lg mb-6">Quotation Funnel Breakdown</h4>
          <div className="space-y-5">
            {/* New */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 font-medium">New Enquiries</span>
                <span className="text-gray-800 font-semibold">
                  {quotations.filter(q => q.status === "New").length} Leads
                </span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-purple-500 h-full rounded-full transition-all duration-1000" 
                  style={{ width: `${totalLeads ? (quotations.filter(q => q.status === "New").length / totalLeads) * 100 : 0}%` }}
                />
              </div>
            </div>

            {/* In Progress */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 font-medium">Contacted & Active Negotiations</span>
                <span className="text-gray-800 font-semibold">
                  {contactedLeads} Leads
                </span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-500 h-full rounded-full transition-all duration-1000" 
                  style={{ width: `${totalLeads ? (contactedLeads / totalLeads) * 100 : 0}%` }}
                />
              </div>
            </div>

            {/* Closed Won */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 font-medium">Closed Deals (Won)</span>
                <span className="text-gray-800 font-semibold">
                  {wonLeads} Leads ({wonConversionRate}%)
                </span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-green-500 h-full rounded-full transition-all duration-1000" 
                  style={{ width: `${wonConversionRate}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Survey Completion Progress */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-gray-800 text-lg mb-2">Survey Completion Progress</h4>
            <p className="text-sm text-gray-500 mb-6">Percentage of scheduled site surveys successfully completed.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-8 justify-center py-2">
            {/* Circular representation */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="54" className="stroke-gray-100 fill-none" strokeWidth="10" />
                <circle 
                  cx="64" 
                  cy="64" 
                  r="54" 
                  className="stroke-[#00539B] fill-none transition-all duration-1000" 
                  strokeWidth="10" 
                  strokeDasharray={339.29}
                  strokeDashoffset={339.29 - (339.29 * surveyCompletionRate) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-bold text-gray-800">{surveyCompletionRate}%</span>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Done</span>
              </div>
            </div>

            <div className="space-y-3 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
                <span className="text-sm font-medium text-gray-700">{completedSurveys} Completed Surveys</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3.5 h-3.5 rounded-full bg-blue-500" />
                <span className="text-sm font-medium text-gray-700">{pendingSurveys} Scheduled Surveys</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500" />
                <span className="text-sm font-medium text-gray-700">
                  {surveys.filter(s => s.status === "Cancelled").length} Cancelled Surveys
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Recent Tables Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Recent Site Surveys */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h4 className="font-bold text-gray-800 text-lg">Recent Site Surveys</h4>
            <Link 
              to="/admin/inquary" 
              className="text-xs font-semibold text-[#00539B] hover:text-[#ff7300] flex items-center gap-1 transition"
            >
              <span>View All</span>
              <FaArrowRight size={10} />
            </Link>
          </div>
          <div className="flex-1 overflow-x-auto">
            {recentSurveys.length > 0 ? (
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-3">Customer</th>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recentSurveys.map((survey) => (
                    <tr key={survey.id} className="hover:bg-gray-50/50 transition">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-850">{survey.name}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{survey.mobile}</div>
                      </td>
                      <td className="px-6 py-4 text-gray-500 font-medium text-xs">{survey.date.split(",")[0]}</td>
                      <td className="px-6 py-4">{getSurveyStatusBadge(survey.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-10 text-center text-gray-400">No recent surveys found.</div>
            )}
          </div>
        </div>

        {/* Recent Quotation Leads */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h4 className="font-bold text-gray-800 text-lg">Recent Quotation Requests</h4>
            <Link 
              to="/admin/leads" 
              className="text-xs font-semibold text-[#00539B] hover:text-[#ff7300] flex items-center gap-1 transition"
            >
              <span>View All</span>
              <FaArrowRight size={10} />
            </Link>
          </div>
          <div className="flex-1 overflow-x-auto">
            {recentQuotes.length > 0 ? (
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-3">Customer</th>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recentQuotes.map((quote) => (
                    <tr key={quote.id} className="hover:bg-gray-50/50 transition">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-850">{quote.name}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{quote.mobile}</div>
                      </td>
                      <td className="px-6 py-4 text-gray-500 font-medium text-xs">{quote.date.split(",")[0]}</td>
                      <td className="px-6 py-4">{getQuoteStatusBadge(quote.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-10 text-center text-gray-400">No recent quotation leads found.</div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
