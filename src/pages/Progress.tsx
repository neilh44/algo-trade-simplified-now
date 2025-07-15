import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  BookOpen,
  Clock,
  Trophy,
  TrendingUp,
  Target,
  Calendar,
  Award,
  CheckCircle,
  PlayCircle,
  BarChart3,
} from 'lucide-react';

export default function ProgressPage() {
  const overallStats = {
    coursesCompleted: 2,
    totalCourses: 6,
    hoursLearned: 5.5,
    currentStreak: 7,
    totalPoints: 1250,
    rank: 'Bronze',
  };

  const recentActivity = [
    { type: 'course_completed', title: 'Algorithmic Trading Basics', date: '2024-01-15', points: 200 },
    { type: 'lesson_completed', title: 'Introduction to Python - Variables and Data Types', date: '2024-01-14', points: 50 },
    { type: 'quiz_passed', title: 'Risk Management Quiz', date: '2024-01-13', points: 100 },
    { type: 'course_started', title: 'Technical Analysis with Python', date: '2024-01-12', points: 0 },
    { type: 'achievement_earned', title: 'First Course Complete', date: '2024-01-10', points: 150 },
  ];

  const coursesInProgress = [
    {
      title: 'Python for Trading',
      progress: 75,
      completedLessons: 9,
      totalLessons: 12,
      estimatedTime: '45 minutes remaining',
      nextLesson: 'API Integration Basics',
    },
    {
      title: 'Technical Analysis with Python',
      progress: 30,
      completedLessons: 3,
      totalLessons: 10,
      estimatedTime: '2 hours remaining',
      nextLesson: 'Moving Averages Implementation',
    },
    {
      title: 'Risk Management Fundamentals',
      progress: 0,
      completedLessons: 0,
      totalLessons: 6,
      estimatedTime: '1.5 hours remaining',
      nextLesson: 'Position Sizing Basics',
    },
  ];

  const weeklyGoals = [
    { goal: 'Complete 2 lessons', current: 3, target: 2, completed: true },
    { goal: 'Spend 3 hours learning', current: 2.5, target: 3, completed: false },
    { goal: 'Pass 1 quiz', current: 1, target: 1, completed: true },
    { goal: 'Start new course', current: 0, target: 1, completed: false },
  ];

  const achievements = [
    { title: 'First Steps', description: 'Started your first course', earned: true, date: '2024-01-08' },
    { title: 'Quick Learner', description: 'Completed first course in under 3 days', earned: true, date: '2024-01-10' },
    { title: 'Dedicated Student', description: 'Maintained 7-day learning streak', earned: true, date: '2024-01-15' },
    { title: 'Python Master', description: 'Complete all Python courses', earned: false, date: null },
    { title: 'Quiz Champion', description: 'Pass 10 quizzes with 90%+ score', earned: false, date: null },
    { title: 'Knowledge Seeker', description: 'Complete 5 courses', earned: false, date: null },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'course_completed': return CheckCircle;
      case 'lesson_completed': return PlayCircle;
      case 'quiz_passed': return Trophy;
      case 'course_started': return BookOpen;
      case 'achievement_earned': return Award;
      default: return BookOpen;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'course_completed': return 'text-secondary';
      case 'lesson_completed': return 'text-primary';
      case 'quiz_passed': return 'text-yellow-500';
      case 'course_started': return 'text-blue-500';
      case 'achievement_earned': return 'text-purple-500';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Learning Progress</h1>
            <p className="text-muted-foreground">
              Track your learning journey and celebrate your achievements
            </p>
          </div>

          {/* Overall Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Courses Completed</p>
                    <p className="text-2xl font-bold">{overallStats.coursesCompleted}/{overallStats.totalCourses}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Clock className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Hours Learned</p>
                    <p className="text-2xl font-bold">{overallStats.hoursLearned}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Current Streak</p>
                    <p className="text-2xl font-bold">{overallStats.currentStreak} days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Trophy className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Points Earned</p>
                    <p className="text-2xl font-bold">{overallStats.totalPoints}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Courses in Progress */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Courses in Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {coursesInProgress.map((course, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{course.title}</h3>
                        <Badge variant="outline">{course.progress}%</Badge>
                      </div>
                      <Progress value={course.progress} className="w-full" />
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                        <span>{course.estimatedTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm">Next: {course.nextLesson}</p>
                        <Button size="sm">Continue</Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Weekly Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Weekly Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {weeklyGoals.map((goal, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{goal.goal}</span>
                      {goal.completed ? (
                        <CheckCircle className="h-4 w-4 text-secondary" />
                      ) : (
                        <span className="text-xs text-muted-foreground">
                          {goal.current}/{goal.target}
                        </span>
                      )}
                    </div>
                    <Progress 
                      value={Math.min((goal.current / goal.target) * 100, 100)} 
                      className="w-full h-2" 
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => {
                    const Icon = getActivityIcon(activity.type);
                    return (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border">
                        <Icon className={`h-5 w-5 mt-0.5 ${getActivityColor(activity.type)}`} />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{activity.title}</p>
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-muted-foreground">
                              {new Date(activity.date).toLocaleDateString()}
                            </p>
                            {activity.points > 0 && (
                              <Badge variant="outline" className="text-xs">
                                +{activity.points} pts
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start space-x-3 p-3 rounded-lg border ${
                        achievement.earned ? 'bg-secondary/10 border-secondary/20' : 'opacity-50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        achievement.earned ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        <Trophy className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{achievement.title}</p>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        {achievement.earned && achievement.date && (
                          <p className="text-xs text-secondary mt-1">
                            Earned {new Date(achievement.date).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Learning Path Visualization */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2 h-5 w-5" />
                Learning Path Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Algorithmic Trading Fundamentals Path</h3>
                  <div className="flex justify-center items-center space-x-2 mb-4">
                    <Badge className="bg-secondary text-secondary-foreground">Bronze Level</Badge>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">33% Complete</span>
                  </div>
                  <Progress value={33} className="w-full max-w-md mx-auto" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                    <CheckCircle className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <p className="font-medium">Fundamentals</p>
                    <p className="text-sm text-muted-foreground">Completed</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <PlayCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-medium">Programming</p>
                    <p className="text-sm text-muted-foreground">In Progress</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted border">
                    <BookOpen className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="font-medium">Advanced Strategies</p>
                    <p className="text-sm text-muted-foreground">Locked</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}