
import React from 'react';
import { GitBranch, Clock } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-card shadow-sm rounded-lg mb-6 p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-primary">CI/CD Pipeline with Jenkins & Docker</h1>
            <p className="text-muted-foreground mt-1">Visualizing continuous integration and deployment workflows</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GitBranch size={16} />
              <span>main</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock size={16} />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
