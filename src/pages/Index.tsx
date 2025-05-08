
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PipelineVisualizer from '@/components/PipelineVisualizer';
import CodeSnippet from '@/components/CodeSnippet';
import { samplePipelineData, jenkinsConfigSnippet, dockerComposeSnippet, dockerfileSnippet } from '@/data/pipelineData';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Rocket, Info, GitMerge, RefreshCcw } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <main className="space-y-8">
          <section>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Pipeline Visualization</h2>
                <p className="text-muted-foreground">Real-time status of your deployment pipeline</p>
              </div>
              
              <Button variant="outline" className="gap-2">
                <RefreshCcw size={16} />
                Refresh Pipeline
              </Button>
            </div>
            
            <PipelineVisualizer pipeline={samplePipelineData} />
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">CI/CD Configuration</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Tabs defaultValue="jenkins" className="w-full">
                  <TabsList>
                    <TabsTrigger value="jenkins">Jenkinsfile</TabsTrigger>
                    <TabsTrigger value="docker-compose">docker-compose.yml</TabsTrigger>
                    <TabsTrigger value="dockerfile">Dockerfile</TabsTrigger>
                  </TabsList>
                  <TabsContent value="jenkins">
                    <CodeSnippet 
                      title="Jenkinsfile" 
                      code={jenkinsConfigSnippet} 
                      language="groovy"
                    />
                  </TabsContent>
                  <TabsContent value="docker-compose">
                    <CodeSnippet 
                      title="docker-compose.yml" 
                      code={dockerComposeSnippet} 
                      language="yaml"
                    />
                  </TabsContent>
                  <TabsContent value="dockerfile">
                    <CodeSnippet 
                      title="Dockerfile" 
                      code={dockerfileSnippet} 
                      language="dockerfile"
                    />
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card rounded-lg border p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Info size={20} className="text-primary" />
                    <h3 className="font-semibold">How It Works</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    This CI/CD pipeline automatically builds, tests, and deploys your application
                    whenever changes are pushed to your repository.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="bg-primary rounded-full p-1 mt-0.5">
                        <GitMerge size={12} className="text-primary-foreground" />
                      </span>
                      <span>Commits trigger automatic builds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-primary rounded-full p-1 mt-0.5">
                        <Rocket size={12} className="text-primary-foreground" />
                      </span>
                      <span>Successful builds deploy automatically</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          <section className="bg-card rounded-lg border p-6">
            <h2 className="text-xl font-bold mb-4">Getting Started with Jenkins & Docker CI/CD</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">1. Set Up Jenkins</h3>
                <p className="text-sm text-muted-foreground">
                  Install Jenkins using Docker and configure it to connect to your version control system.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">2. Create Pipeline</h3>
                <p className="text-sm text-muted-foreground">
                  Define your build pipeline in a Jenkinsfile that will be stored in your repository.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. Configure Webhooks</h3>
                <p className="text-sm text-muted-foreground">
                  Set up webhooks in your repository to trigger Jenkins builds automatically on code changes.
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <Button className="gap-2">
                <Rocket size={16} />
                <span>Learn More About CI/CD</span>
              </Button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
