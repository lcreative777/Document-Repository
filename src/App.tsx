/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import Dashboard from './components/Dashboard';
import Repository from './components/Repository';
import SubmitDocuments from './components/SubmitDocuments';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'documents':
        return <Repository />;
      case 'submit':
        return <SubmitDocuments />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={(tab) => {
          setActiveTab(tab);
          setIsSidebarOpen(false);
        }} 
      />

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-64 bg-surface z-50 lg:hidden shadow-2xl"
            >
              <Sidebar 
                activeTab={activeTab} 
                onTabChange={(tab) => {
                  setActiveTab(tab);
                  setIsSidebarOpen(false);
                }} 
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="lg:ml-64 pt-20 pb-24 lg:pb-12 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <BottomNav 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />

      {/* Quick Action for Demo: Switch to Submit */}
      {activeTab === 'documents' && (
        <button 
          onClick={() => setActiveTab('submit')}
          className="fixed bottom-24 right-6 lg:bottom-12 lg:right-12 w-14 h-14 bg-primary text-white rounded-2xl fab-shadow flex items-center justify-center active:scale-90 transition-transform z-40"
        >
          <motion.div
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <PlusIcon />
          </motion.div>
        </button>
      )}
    </div>
  );
}

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
}
