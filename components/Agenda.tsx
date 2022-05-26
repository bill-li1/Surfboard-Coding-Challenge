import { useState, useEffect } from "react";
import { Box, Divider, Text, IconButton } from "@chakra-ui/react";
import { ITopic } from "../util/types";
import AddTopic from "./AddTopic";
import EditTopic from "./EditTopic";
import ViewTopic from "./ViewTopic";
import DeleteTopic from "./DeleteTopic";
import axios from "axios";
import { BsEyeFill } from "react-icons/Bs";

const convertMinsToHrsMins = (minutes: number) => {
  var h = Math.floor(minutes / 60);
  var m = minutes % 60;
  if (h > 0) {
    return h + " h " + m + " min";
  }
  return m + " min ";
};

const Agenda = () => {
  const [topics, setTopics] = useState<ITopic[]>([]);
  const [topicView, setViewTopic] = useState<boolean>(false);
  const [topicViewTopic, setTopicViewTopic] = useState<ITopic | null>(null);

  const addTopic = (topic: ITopic) => {
    setTopics([...topics, topic]);
  };

  useEffect(() => {
    console.log("running");
    axios
      .get("http://localhost:5000/topics/")
      .then((response) => {
        console.log(response.data);
        setTopics(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteTopic = (_id: string) => {
    axios.delete("http://localhost:5000/topics/" + _id).then((res) => {
      console.log(res.data);
    });
    setTopics(topics.filter((topic) => topic._id !== _id));
  };

  const editTopic = (topic: ITopic) => {
    const newTopics = topics.map((t) => {
      if (t._id === topic._id) {
        console.log("ran");
        console.log(topic);
        return topic;
      } else {
        return t;
      }
    });
    setTopics(newTopics);
  };

  const openTopic = (topic: ITopic) => {
    setTopicViewTopic(topic);
    setViewTopic(true);
  };

  return (
    <Box display="flex" flexDir="column" w="100%" h="100%" m="30px">
      {topicView ? (
        <ViewTopic topic={topicViewTopic} goBack={() => setViewTopic(false)} />
      ) : (
        <Box>
          <Box h="65px" display="flex" flexDir="row" mb={4}>
            <Box fontSize="5xl" mr="auto" ml={4}>
              Agenda
            </Box>
            <Box mt={4} mr={4}>
              <AddTopic addTopic={addTopic} />
            </Box>
          </Box>
          <Divider mb={8} />
          <Box pl={4} pr={4}>
            {topics.map((topic, index) => (
              <Box key={topic._id}>
                <Box display="flex" className="Topic">
                  <Text
                    display="flex"
                    fontSize="22"
                    flexShrink={0}
                    mr={2}
                    pt={2}
                  >
                    {index + 1}. {topic.title}
                  </Text>
                  <Text
                    display="flex"
                    fontSize="20"
                    textColor="gray.500"
                    pt={2}
                  >
                    ({convertMinsToHrsMins(topic.duration)})
                  </Text>
                  <Box ml="auto" className="Buttons">
                    <IconButton
                      onClick={() => {
                        openTopic(topic);
                      }}
                      borderRadius="md"
                      aria-label="Profile"
                      bgColor="#5D5D64"
                      icon={<BsEyeFill size={20} />}
                      variant="outline"
                    />
                    <Box ml={1} display="flex">
                      <EditTopic editTopic={editTopic} oldTopic={topic} />
                    </Box>
                    <Box ml={1} display="flex">
                      <DeleteTopic deleteTopic={deleteTopic} _id={topic._id} />
                    </Box>
                  </Box>
                </Box>
                <Divider mt={2} mb={4} ml="auto" />
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Agenda;
