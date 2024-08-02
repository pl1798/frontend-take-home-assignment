import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */
type FilterStatus = 'all' | 'pending' | 'completed'

const Index = () => {
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all')

  const handleStatusChange = (value: string) => {
    setFilterStatus(value as FilterStatus)
  }
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <Tabs value={filterStatus} onValueChange={handleStatusChange}>
          <TabsList className="flex space-x-3 py-6">
            <TabsTrigger
              value="all"
              className={`px-6 py-2 ${
                filterStatus === 'all'
                  ? 'bg-gray-800 text-white'
                  : 'border border-gray-200 text-gray-700'
              } rounded-full`}
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="pending"
              className={`px-6 py-2 ${
                filterStatus === 'pending'
                  ? 'bg-gray-800 text-white'
                  : 'border border-gray-200 text-gray-700'
              } rounded-full`}
            >
              Pending
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className={`px-6 py-2 ${
                filterStatus === 'completed'
                  ? 'bg-gray-800 text-white'
                  : 'border border-gray-200 text-gray-700'
              } rounded-full`}
            >
              Completed
            </TabsTrigger>
          </TabsList>
          <TabsContent value={filterStatus}>
            <div className="pt-10">
              <TodoList filterStatus={filterStatus} />
            </div>
          </TabsContent>
        </Tabs>
        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
