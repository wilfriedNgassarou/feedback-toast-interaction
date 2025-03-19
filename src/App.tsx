import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

function App() {
  const [state, setState] = useState<'idle' | 'tmp' | 'sent' | 'hidden'>('idle')

  return (
    <section className="w-full h-dvh flex justify-center items-center">
      <AnimatePresence initial={false}>
        {state != 'hidden' && (
          <motion.div
            key="test"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }} 
            transition={{ duration: .3, bounce: .2 }}
            onAnimationComplete={() => setTimeout(() => setState('idle'), 200)}
            className="relative w-80 lg:w-96 text-base lg:text-lg overflow-hidden border-[1px] rounded-xl shadow flex items-center justify-end px-3 py-2"
          >
            <AnimatePresence initial={false}>
              {state == 'sent' ? (
                <motion.div
                  key="test-1" 
                  initial={{ y: 40 }}
                  animate={{ y: 0 }}
                  transition={{ duration: .2, bounce: .4 }}
                  onAnimationComplete={() => setTimeout(() => setState('hidden'), 500)}
                  className="absolute left-3"
                >
                  Thanks for sharing your feedback
                </motion.div>
              ): (
                <motion.div
                  key="test-2"
                  exit={{ opacity: 0, transition: { duration: .2 } }}
                  className="absolute left-3"
                >
                  Found this helpful?
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex gap-4">
              <motion.div
                onClick={() => setState('tmp')}
                animate={{ y: state == 'sent' ? -50 : 0 }}
                transition={{ duration: .2, bounce: .4 }}
                className="w-10 h-10 flex justify-center items-center cursor-pointer bg-black relative overflow-hidden"
                style={{ borderRadius: 12 }}
              >
                {state == 'idle' && (
                  // thumb up outline
                  <motion.svg
                    key="outline"
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-6 h-6 fill-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 8q.8 0 1.4.6T23 10v2q0 .175-.05.375t-.1.375l-3 7.05q-.225.5-.75.85T18 21H7V8l6-5.95q.375-.375.888-.437t.987.187.7.7.1.925L14.55 8zM9 8.85V19h9l3-7v-2h-9l1.35-5.5zM4 21q-.825 0-1.412-.587T2 19v-9q0-.825.588-1.412T4 8h3v2H4v9h3v2zm5-2V8.85z" />
                  </motion.svg>
                )}
                {state != 'idle' && (
                  <>
                    {/* crosshair  */}
                    <motion.svg
                      initial={{ scale: .1, opacity: 1 }}
                      animate={{ scale: 4, opacity: [0.6, 0.1] }}
                      transition={{ duration: .4, bounce: .2 }}
                      viewBox="0 0 24 24"
                      className="absolute z-10 w-10 h-10 stroke-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 16v5m0-18v5m4 4h5M3 12h5"
                      />
                    </motion.svg>
                    {/* firework  */}
                    <motion.svg
                      className="w-11 h-11 absolute"
                      initial={{ scale: 0 }}
                      animate={{ scale: 5 }}
                      transition={{ duration: .5, bounce: .2, delay: .2 }}
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path d="m12.594 23.258-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path>
                        <path
                          fill="white"
                          d="M17.656 7.77a.847.847 0 1 1 .936 1.402l-.1.045-4.198 1.572c-.093.035-.165-.067-.124-.14l.025-.03 3.461-2.85ZM17 3.34a.847.847 0 0 1 .23 1.272l-2.849 3.46c-.071.088-.21.008-.17-.098l1.572-4.198A.847.847 0 0 1 17 3.34m4.014 7.825a.847.847 0 1 1 0 1.67l-4.422-.736c-.112-.019-.112-.179 0-.197zm-6.804 4.861c-.034-.092.068-.165.142-.124l.03.026 2.848 3.46a.847.847 0 1 1-1.402.937l-.045-.101zm.084-2.815 4.198 1.572a.847.847 0 1 1-.836 1.447l-3.46-2.849c-.088-.071-.008-.21.098-.17m-4.505 2.815-1.572 4.198a.847.847 0 1 1-1.448-.836l2.85-3.46c.071-.088.21-.008.17.098m.016-2.645-3.461 2.85a.847.847 0 1 1-.836-1.448l4.198-1.572c.106-.04.186.099.099.17M2 12.001c0 .523.47.92.986.835l4.422-.737c.112-.019.112-.179 0-.197l-4.422-.737A.847.847 0 0 0 2 12ZM5.072 8a.847.847 0 0 1 1.182-.295l.09.065 3.46 2.849c.077.062.025.176-.06.177l-.038-.006-4.198-1.573A.847.847 0 0 1 5.072 8m3.145-4.224 1.572 4.198c.04.106-.099.186-.17.099l-2.85-3.461a.847.847 0 1 1 1.448-.836m2.948 1.21a.847.847 0 1 1 1.67 0L12.1 9.408c-.019.112-.179.112-.197 0l-.737-4.422Zm1.67 14.028a.847.847 0 1 1-1.67 0l.737-4.422c.018-.112.178-.112.197 0z"
                        />
                      </g>
                    </motion.svg>
                    {/* thumb up fill  */}
                    <motion.svg
                      initial={{ scale: .2, opacity: 0 }}
                      animate={{ 
                        scale: [.2, 1.5, 1],
                        rotate: [0, -24, 0], 
                        opacity: 1 
                      }}
                      transition={{ delay: .25, duration: .5 }}
                      onAnimationComplete={() => setTimeout(() => setState('sent'), 100)}
                      className="w-6 h-6 fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 8q.8 0 1.4.6T23 10v2q0 .175-.038.375t-.112.375l-3 7.05q-.225.5-.75.85T18 21h-8q-.825 0-1.412-.587T8 19V8.825q0-.4.163-.762t.437-.638l5.425-5.4q.375-.35.888-.425t.987.175.688.7.087.925L15.55 8zM4 21q-.825 0-1.412-.587T2 19v-9q0-.825.588-1.412T4 8t1.413.588T6 10v9q0 .825-.587 1.413T4 21" />
                    </motion.svg>
                  </>
                )} 
              </motion.div>
              <motion.div 
                animate={{ y: state == 'sent' ? 50 : 0 }}
                transition={{ duration: .2, bounce: .4 }}
                className="w-10 h-10 flex justify-center items-center bg-black rounded-xl"
              >
                <svg
                  className="w-6 h-6 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 16q-.8 0-1.4-.6T1 14v-2q0-.175.05-.375t.1-.375l3-7.05q.225-.5.75-.85T6 3h11v13l-6 5.95q-.375.375-.888.438t-.987-.188-.7-.7-.1-.925L9.45 16zm12-.85V5H6l-3 7v2h9l-1.35 5.5zM20 3q.825 0 1.413.588T22 5v9q0 .825-.587 1.413T20 16h-3v-2h3V5h-3V3zm-5 2v10.15z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default App
