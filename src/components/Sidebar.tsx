import { useState, useEffect } from 'react';

interface Session {
  key: string;
  status: string;
  model?: string;
}

export function Sidebar() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [activeTab, setActiveTab] = useState<'sessions' | 'logs' | 'files'>('sessions');

  useEffect(() => {
    // TODO: Fetch sessions from backend
    // For MVP, mock data
    setSessions([
      { key: 'agent:main:main', status: 'active', model: 'claude-sonnet-4-5' }
    ]);
  }, []);

  return (
    <div className="w-80 bg-gray-900 border-r border-gray-700 flex flex-col">
      {/* Tabs */}
      <div className="flex border-b border-gray-700">
        <button
          onClick={() => setActiveTab('sessions')}
          className={`flex-1 px-4 py-3 text-sm font-medium ${
            activeTab === 'sessions'
              ? 'text-white bg-gray-800 border-b-2 border-blue-500'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Sessions
        </button>
        <button
          onClick={() => setActiveTab('logs')}
          className={`flex-1 px-4 py-3 text-sm font-medium ${
            activeTab === 'logs'
              ? 'text-white bg-gray-800 border-b-2 border-blue-500'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Logs
        </button>
        <button
          onClick={() => setActiveTab('files')}
          className={`flex-1 px-4 py-3 text-sm font-medium ${
            activeTab === 'files'
              ? 'text-white bg-gray-800 border-b-2 border-blue-500'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Files
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'sessions' && (
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-400 mb-3">Active Sessions</h3>
            {sessions.map((session, i) => (
              <div
                key={i}
                className="p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-white">{session.key}</span>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
                {session.model && (
                  <p className="text-xs text-gray-400">{session.model}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'logs' && (
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-400 mb-3">Recent Logs</h3>
            <div className="text-sm text-gray-500 font-mono bg-gray-800 p-3 rounded">
              <p>[14:09] Session started</p>
              <p>[14:09] WebSocket connected</p>
              <p className="text-green-400">[14:09] System ready</p>
            </div>
          </div>
        )}

        {activeTab === 'files' && (
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-400 mb-3">Modified Files</h3>
            <p className="text-sm text-gray-500">No files modified yet</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
          + Spawn Subagent
        </button>
      </div>
    </div>
  );
}
