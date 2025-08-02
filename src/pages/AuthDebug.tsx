// src/pages/AuthDebug.tsx
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useNavigate } from 'react-router-dom';

export default function AuthDebug() {
  const { user, session, loading } = useAuth();
  const navigate = useNavigate();
  const [debugInfo, setDebugInfo] = useState<any>({});
  const [testEmail, setTestEmail] = useState(`test${Date.now()}@example.com`);
  const [testPassword] = useState('test123456');
  const [message, setMessage] = useState('');

  useEffect(() => {
    checkAuthState();
  }, [user, session]);

  const checkAuthState = async () => {
    const { data: sessionData } = await supabase.auth.getSession();
    const { data: { user: currentUser } } = await supabase.auth.getUser();
    
    setDebugInfo({
      timestamp: new Date().toISOString(),
      authHook: {
        user: user?.email || 'null',
        session: session ? 'exists' : 'null',
        loading: loading,
      },
      supabaseDirectly: {
        session: sessionData.session ? 'exists' : 'null',
        user: currentUser?.email || 'null',
      },
      localStorage: {
        keys: Object.keys(localStorage).filter(k => k.includes('supabase')),
        count: Object.keys(localStorage).filter(k => k.includes('supabase')).length,
      },
      environment: {
        supabaseUrl: import.meta.env.VITE_SUPABASE_URL || 'not set',
        hasAnonKey: !!import.meta.env.VITE_SUPABASE_ANON_KEY,
      }
    });
  };

  const testSignup = async () => {
    setMessage('Testing signup...');
    console.log('Testing signup with:', testEmail);
    
    const { data, error } = await supabase.auth.signUp({
      email: testEmail,
      password: testPassword,
    });

    console.log('Signup result:', { data, error });
    
    if (!error) {
      setMessage('✅ Signup successful! Check debug info.');
      await checkAuthState();
      
      // Wait a bit then check session
      setTimeout(async () => {
        const { data: { session } } = await supabase.auth.getSession();
        console.log('Session after signup:', session);
        if (session) {
          setMessage('✅ Session created! You can navigate to dashboard.');
        } else {
          setMessage('⚠️ No session after signup. Email verification might be required.');
        }
        await checkAuthState();
      }, 1000);
    } else {
      setMessage('❌ Signup failed: ' + error.message);
    }
  };

  const testLogin = async () => {
    setMessage('Testing login...');
    console.log('Testing login with:', testEmail);
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: testEmail,
      password: testPassword,
    });

    console.log('Login result:', { data, error });
    
    if (!error) {
      setMessage('✅ Login successful!');
      await checkAuthState();
    } else {
      setMessage('❌ Login failed: ' + error.message);
    }
  };

  const testLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      setMessage('✅ Logout successful!');
      await checkAuthState();
    } else {
      setMessage('❌ Logout failed: ' + error.message);
    }
  };

  const clearAuth = () => {
    localStorage.clear();
    sessionStorage.clear();
    setMessage('🧹 Cleared all local storage. Reloading...');
    setTimeout(() => window.location.reload(), 1000);
  };

  const testDatabaseAccess = async () => {
    setMessage('Testing database access...');
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('count')
        .limit(1);
      
      if (error) {
        setMessage('❌ Database error: ' + error.message);
      } else {
        setMessage('✅ Database connection successful!');
      }
    } catch (err: any) {
      setMessage('❌ Database error: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>🔍 Auth Debug Tool</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Current Status:</h3>
              <div className="space-y-1 text-sm">
                <p>User: <span className="font-mono">{user?.email || 'Not logged in'}</span></p>
                <p>Session: <span className="font-mono">{session ? '✅ Active' : '❌ None'}</span></p>
                <p>Loading: <span className="font-mono">{loading ? '⏳ Yes' : '✅ No'}</span></p>
              </div>
            </div>
            
            {message && (
              <Alert className="mb-4">
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}
            
            <div className="bg-muted p-4 rounded text-xs font-mono overflow-auto max-h-96">
              <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🧪 Test Authentication Flow</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Test Credentials:</p>
              <div className="space-y-2">
                <Input 
                  value={testEmail} 
                  onChange={(e) => setTestEmail(e.target.value)}
                  placeholder="Test email"
                />
                <p className="text-xs text-muted-foreground">Password: {testPassword}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <Button onClick={testSignup} variant="outline" className="w-full">
                1. Test Signup
              </Button>
              <Button onClick={testLogin} variant="outline" className="w-full">
                2. Test Login
              </Button>
              <Button onClick={testLogout} variant="outline" className="w-full">
                3. Test Logout
              </Button>
              <Button onClick={testDatabaseAccess} variant="outline" className="w-full">
                4. Test Database
              </Button>
              <Button onClick={checkAuthState} variant="secondary" className="w-full">
                🔄 Refresh Debug Info
              </Button>
              <Button onClick={clearAuth} variant="destructive" className="w-full">
                🧹 Clear All Auth Data
              </Button>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm font-semibold mb-2">Navigation Tests:</p>
              <div className="grid grid-cols-3 gap-2">
                <Button onClick={() => navigate('/signup')} variant="secondary" size="sm">
                  → Signup
                </Button>
                <Button onClick={() => navigate('/login')} variant="secondary" size="sm">
                  → Login
                </Button>
                <Button onClick={() => navigate('/dashboard')} variant="secondary" size="sm">
                  → Dashboard
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>📋 Debugging Steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <ol className="list-decimal list-inside space-y-1">
              <li>First, click "Clear All Auth Data" to start fresh</li>
              <li>Click "Test Database" to verify Supabase connection</li>
              <li>Click "Test Signup" to create a new test account</li>
              <li>Check if session is created (look for green checkmark)</li>
              <li>Try navigating to Dashboard - it should work if authenticated</li>
              <li>If Dashboard redirects to login, come back here and check debug info</li>
            </ol>
            <p className="mt-4 p-3 bg-muted rounded">
              <strong>💡 Tip:</strong> Keep browser console open for detailed logs!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}